import React from "react";
import styles from "../styles/login_signup.module.css";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../Components/Navbar/Navbar"), {
  ssr: false,
});
import { Head } from "next/head";

function signup() {
  return (
    <>
      
      <div className={styles.complete}>
        <form>
          <h3 className={styles.headi}>Sign Up</h3>

          <div className="form-group">
            {/* <label>First name</label> */}
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              required
            />
          </div>

          <div className="form-group">
            {/* <label>Last name</label> */}
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              required
            />
          </div>

          <div className="form-group">
            {/* <label>Email address</label> */}
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              required
            />
          </div>

          <div className="form-group">
            {/* <label>Password</label> */}
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
          <p className="forgot-password text-center">
            Already registered? <a href="/login">sign in</a>
          </p>
        </form>
      </div>
    </>
  );
}

export default signup;
