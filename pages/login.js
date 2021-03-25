import React from "react";
import styles from "../styles/login_signup.module.css";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../Components/Navbar/Navbar"), {
  ssr: false,
});
import { Head } from "next/head";

function login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
const [isError, setIsError] = useState(false);
const [firstName, setUserName] = useState("");
const [password, setPassword] = useState("");
const { setAuthTokens } = useAuth();

function postLogin() {
    axios.post("http://10.6.254.22:5000/userinformation/login", {
      firstName,
      password
    }).then(result => {
      if (result.status === 200) {
        console.log('You have been logged in as user: ' +result.data[0].firstName)
        setAuthTokens(result.data);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }


  
  return (
    <>
      
      

      <div className={styles.login}>
        <form action="POST">
          <label for="username">Username</label>
          <input
            className={styles.in}
            type="text"
            placeholder="Enter Username"
            value={firstName}
            name={"uname"}
            required
          />
          <label for="passwordd">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={onChange}
            value={password}
            name="psw"
            required
          />
          <button className={styles.but} type="submit" onClick={login}>
            Login
          </button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
          <p className="forgot-password text-center">
            Already registered? <a href="/Signup">sign Up</a>
          </p>
        </form>
      </div>
    </>
  );
}

export default login;
