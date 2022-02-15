// ein context ro vaseh ein misazim ke etelaat daryafti az auth google ro dar on gharar dahim

import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
// ba useHistory mitonim az history hayeh daron history props daryafti estefadeh konim
import { auth } from '../firebase';
// create context
export const AuthContext=React.createContext();

const AuthContextProvider = ({children}) => {
    // state loading
    const [loading,setLoading]=useState(true);
    // state user ha
    const [user,setUser]=useState(false);
    // history
    const history=useHistory();
    // useEffect
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            setUser(user);
            // console.log(user)
            setLoading(false);
            if(user) history.push("/chats");
             



        });

    },[user,history])
    // zamni ke user taghir kard va har mogheh kenavigation ei rokh dad va karbar az 1 masir be masir degeh raft
    

    return (
        <AuthContext.Provider value={user}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;