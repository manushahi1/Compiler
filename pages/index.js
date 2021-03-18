import Head from "next/head";
// import styles from '../styles/Home.module.css'
// import 'materialize-css/dist/css/materialize.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import styles from "../styles/code.module.css";
import dynamic from "next/dynamic";
// import Dropdown from '../Dropdown';

import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

const Editor = dynamic(() => import("../Components/Editor/editor"), {
  ssr: false,
});
const Navbar = dynamic(() => import("../Components/Navbar/Navbar"), {
  ssr: false,
});

export default function Home() {
  const [input, setInput] = useState("");
  const [out, setOut] = useState("");
  const [lang, setLang] = useState(0);
  // const [code, setCode] = useState("");
  const [editorVal, setEditor] = useState("");

  function onChange(e) {
    setInput(e.target.value);
    console.log(e.target.value);
  }

  const editorInput = async (val) => {
    setEditor(val);
    console.log(val);
  };

   function submitForm() {
     

    setOut(`code :- ${editorVal} input:= ${input}`);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <Navbar />
      </div>

      <div className="container">
      <div className="row">
        <Editor val={editorInput} actualVal={editorVal} />
      </div>
      {/* <div className="container-fluid"> */}

      <button onClick={submitForm}>Run</button>
      <button>Reset</button>

      <div className={styles.io_container}>
        <div className={styles.input_container}>
          input
          <textarea
            type="text"
            name="input"
            value={input}
            onChange={onChange}
            rows="5"
            cols="70"
          ></textarea>
        </div>
        <div className={styles.output_container}>
          output
          <textarea
            type="text"
            name="input"
            value={out}
            rows="5"
            cols="70"
          ></textarea>
        </div>
      </div>

      </div>
    </div>

    // </div>
  );
}
