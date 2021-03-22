import React from "react";
import styles from "../styles/login_signup.module.css";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../Components/Navbar/Navbar"), {
  ssr: false,
});
// import { Head } from "next/head";

function login() {
  return (
    <>
      {/* <Head> */}
      <Navbar />
      {/* </Head> */}

      <div className={styles.login}>
        <form action="POST">
          <label for="username">Username</label>
          <input
            className={styles.in}
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />
          <label for="password">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <button className={styles.but} type="submit">
            Login
          </button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
        </form>
      </div>
    </>
  );
}

export default login;
