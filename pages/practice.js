import Head from "next/head";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import styles from "../styles/code.module.css";
import dynamic from "next/dynamic";

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
  const [lang, setLang] = useState('CPP');
  

  const [editorVal, setEditor] = useState("");
  

  function onChange(e) {
    setInput(e.target.value);
    console.log(e.target.value);
   
  }

  const editorInput = async (val) => {
    setEditor(val);
    
    
    console.log(val);
  };
   const lan=(la)=>{
     console.log("recived from middle",la)
     setLang(la)

   }
   console.log("the language selected forn your coding problem is",lang);

 const resetCode=()=> {
    setEditor("");
    setInput("");
    console.log(editorVal);
  }

  function submitForm() {
    async function run() {
      const res = await fetch(
        "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&fields=*",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "x-rapidapi-key": "aaaaaaaaaaa",
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
          },
          body: {
            stdin: "input",
            language_id: "52",
            source_code: "editorVal",
          },
        }
      );

      const token = res.token;
      if (token) {
        const json = jwt.decode(token);
        console.log(json);
        setOut(json.stdout);
        return json.stdout;
      } else {
        setOut("err");
      }
    }
    setOut(`code :- ${editorVal} input:= ${input}`);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <Navbar 
        lan={lan}
        
        />
      </div>

      <div className="container">
        <div className="row">
          <Editor val={editorInput} actualVal={editorVal} 
          lan={lang}
          
          />
        </div>
        

        {/* <div className="container-fluid"> */}

        <button className={styles.run} onClick={submitForm}>
          Run
        </button>

        <button className={styles.reset} onClick={resetCode}>
          Reset
        </button>

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
              readOnly
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
