import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import 'materialize-css/dist/css/materialize.css'
import styles from '../styles/code.module.css'
import dynamic from "next/dynamic";


const Editor = dynamic(() => import("../Components/Editor/editor"), { ssr: false });
const Navbar = dynamic(() => import("../Components/Navbar/Navbar"), { ssr: false });





export default function Home() {

  
  return (

    <div className={styles.full_container}>
      <div>
      <Navbar/>

      </div>
  <div className={styles.page_container}>
        <div className={styles.q_container}>
        

      
         <Editor/>

        </div>
        <div className={styles.code_editor_wrapper}>
          <div className ={styles.code_editor}>
            
            <Editor/>
          
          </div>

          

          <div className={styles.io_container }>
            <div className={styles.input_container}>
              input 
   

            </div>
            <div className={styles.output_container}>
              output 
              
            </div>

          </div>

        </div>
        




      </div>
  
    </div>
       
   
  )
}

















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

      <div className="container-fluid" style={{display:"flex",flexDirection:"row"}}>
        

        <div className="row" style={{flex:"1"}}>
          <div >7.</div>
          <div >Problem's Name </div>
          <div >Solution</div>
          <div> Submission</div>
        </div>
        <div className="row" style={{flex:1 , border:"solid 2px" }}>
        
          <Editor  val={editorInput} actualVal={editorVal} 
          lan={lang}
          
          
          />
        </div>
        </div>
        

        

        <div className="container-fluid" style={{marginLeft:"50vw"}}>

        <button className={styles.runn} onClick={submitForm} >
          Run
        </button>

        <button className={styles.reset} onClick={resetCode} >
          Reset
        </button>

        <div className={styles.io_container} style={{display:"flex", flexDirection:"column" ,width:"45vw"}}>
          <div className={styles.input_container}>
            input
            <textarea
              type="text"
              name="input"
              value={input}
              onChange={onChange}
              rows="5"
              cols="7"
            ></textarea>
          </div>
          <div className={styles.output_container} style={{display:"flex", flexDirection:"column", width:"45vw"}}>
            output
            <textarea
              type="text"
              name="input"
              value={out}
              readOnly
              rows="5"
              cols="7"
            ></textarea>
          </div>
        </div>
      </div>
    </div>

    // </div>
  );
}
