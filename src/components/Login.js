import React from 'react';
// vaseh login va taeed hoviyat firebase ro import mikonim
import firebase from 'firebase/app';
import { auth } from '../firebase';
// icon
import googleIcon from "../assets/google.svg";
// styles
import styles from "./Login.module.css";
const Login = () => {
    return (
        <div className={styles.loginPage}>
          <div className={styles.loginCard}>
              <h3> welcome to danygraam</h3>
              <div 
              className={styles.button}
              onClick={()=>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                  {/* signInWithRedirect maro hedayat mikoneh be samt ecant hayeh google ke ba kdom login konim
                  -firebase.auth.GoogleAuthProvider()=>ghesmati ast ke google email haro be karbar namyesh midahad va migeh ba kdoom acount mikhahid login konid*/}
                  

                  <img src={googleIcon} alt='google'/> Sign in with google
              </div>
         </div>
    </div>
    );
};

export default Login;