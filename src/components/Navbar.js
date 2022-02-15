import React from 'react';
// styles
import styles from "./Navbar.module.css";


const Navbar = ({logoutHandler}) => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                danygraam
            </div>
            <div onClick={logoutHandler} className={styles.logout}>
                log out
            </div>
        </div>
    );
};

export default Navbar;