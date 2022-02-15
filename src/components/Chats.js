import React,{useState,useEffect,useContext} from 'react';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
// import axios jahat ersal darkhast be engine man
import axios from "axios";
// styles
import styles from "./Chats.module.css";
// react-chat-engine ro vaseh estefadeh az on mport mikonim
import { ChatEngine } from "react-chat-engine";
// component
import Navbar from './Navbar';
// context ro jahat namayesh chat karbar va dastresi be etelaat karbar import mikonim
import { AuthContext } from '../contexts/AuthContextProvider';
const Chats = () => {
    const [loading,setLoading]=useState(true);
    // etelaat user ro ba usecontext az authcontext daryaft mikonim
    const user=useContext(AuthContext)
    const history=useHistory();
    // useEffect
    useEffect(()=>{
        // 1-bayad check konim ke karbar vjood darad ya kheir
        // 2-check mikonimke karbar etelaatash dar safehchat-engine ma(sakhteh shodeh ya kheir) hast ya kheir ->ageh karbar etelaat karbarish dar chat-engine vjood nadasht biya va vasash besaz
        // 3-etelaat user ro be samt chat-engine miferestim va pas az on loading ro false mikonim
        if(!user){
            history.push("/");
            // ageh user vjood nadasht bro be safeh login va ba return kod hayeh digeh ejra nemisheh
            return; 
        }
        // check mikonim ke karbar dar chat-engine hesab darad ya kheir -ageh nadasht on ro eijad kon
        // pas ba axios telaat karbar hayeh mojood dar chat-engine ro migirim
        axios.get("https://api.chatengine.io/users/me",{
            headers:{
                "project-id":"d9cf0da3-d380-43a3-8a0d-813e92ef21b3",
                "user-name":user.email,
                "user-secret":user.uid
            }
        })
        // ageh karbar vjood dasht loading ro be false taghir bedeh
        .then(()=>{
            setLoading(false)
        }) 
        // ageh hesab karbari nadasht amaliyat zir ro anjam bedeh
        .catch(()=>{
            let formData=new FormData;
            // dar ein formData etelaat marboot be karbar ro namayesh midim
            formData.append("email",user.email);
            formData.append("username",user.email);
            formData.append("secret",user.uid);
            // har karbar bayad id khodash ro dashteh bashad
            // greftan aks
            getFile(user.photoURL)
                .then(avatar=>{
                    formData.append("avatar",avatar,avatar.name);
                   

                });

            // aknoon bayad ein form ro be chat-engine poste bekonim
            axios.post("https://api.chatengine.io/users/",formData,{
                headers:{
                    "private-key":"4b36b42c-c09d-4c52-ac84-fd623ff0d243",

                }

            })
            .then (()=>setLoading(false))
            .catch(error=>console.log(error))





        })
    },[user,history])
// function paeen aks karbar ro migirad
const getFile=async(url)=>{
    const response=await fetch(url);
    const data=await response.blob();
    // blob->1 file ast manand object ha ke etelaati nazir aks ro dar khodash darad
    return new File([data],"userPhoto.jpg",{type:"image/jpeg"});

}
    // amaliyat marboot be logout
    const logoutHandler=async()=>{
        await auth.signOut();
        // karbar kkharej shavad va pas az on maro be safeh login push konad
        history.push("/");
    }
    // einja shart mizarim ke ageh karbar user ma vjood ndashteh bashad ya dar halloading bashad "loading ..." ro namayesh bedeh
    if(!user || loading)  return "loading...";
    return (
        <div className={styles.container}>
            <Navbar logoutHandler={logoutHandler}/>
            <ChatEngine
                height="calc(100vh - 50px)"
                projectID="d9cf0da3-d380-43a3-8a0d-813e92ef21b3"
            userName={user.email}
            userSecret={user.uid}

            />
        </div>
    );
};

export default Chats;