import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import Style from "./editor.module.css";

import jwt from "jsonwebtoken";

function editor(props) {
  const [v, setv] = useState("");

  function onChange(newValue) {
    props.val(newValue);
    
  }
  function OnClick() {
    console.log(v);
  }
  // for changing the editor language mode
  const e_lang=(lang)=>{
    console.log('recived from child', lang)

  }

  // async function run() {
  //   const res = await fetch(
  //     "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&fields=*",
  //     {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //         "x-rapidapi-key":
  //           "aaaaaaaaaaa",
  //         "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
  //       },
  //       body: {
  //         stdin: "",
  //         language_id: "",
  //         source_code: "",
  //       },
  //     }
  //   );

  //   const token = res.token;
  //   if (token) {
  //     const json = jwt.decode(token);
  //     console.log(json);
  //     setOut(json.stdout);
  //     return json.stdout;
  //   } else {
  //     setOut("err");
  //   }
  // }
  console.log(props.lan +'editor language ')


  // ace editor api for writing the code 

  return (
    
    <>
    <div className={Style.comp}>
    <AceEditor
        // mode="c_cpp"
        mode={props.lan}
        height="100vh"
        width="50vw"
        theme="github"
        onChange={onChange}
        value={props.actualVal}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      />

    </div>
      
    </>
  );
}
export default editor;

{
  /* <div>
<button className={Style.buttonn} onClick={OnClick} >
  Run
</button>
<button className={Style.buttonn} > Reset</button>
</div>

this was added just below the editor in this page  */
}
