import React from 'react'
import styles from '../styles/login_signup.module.css'
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../Components/Navbar/Navbar"), { ssr: false });

function login() {
    return (


      <>
      <Navbar/>
        <div className={styles.login}> 
        <h2>Sign in</h2>
                  
    <form>
      
      <label>
        <p>Email</p>
        <input type="email" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div className={styles.but}>
        <button type="submit" className="btn btn-success btn-block">Sign In</button>
      </div>
    </form>

        </div>


        </>

       
    );
}

export default login
