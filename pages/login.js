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

// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// // import "./Login.css";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   return (
//     <div className="Login">
//       <Form onSubmit={handleSubmit}>
//         <Form.Group size="lg" controlId="email">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             autoFocus
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group size="lg" controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <Button block size="lg" type="submit" disabled={!validateForm()}>
//           Login
//         </Button>
//       </Form>
//     </div>
//   );
// }

export default login
