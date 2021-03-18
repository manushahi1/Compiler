import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import Style from "./editor.module.css";
import jwt from "jsonwebtoken";
//import Dropdowns from "./Components/Dropdown";
// import { Dropdown } from 'semantic-ui-react'

function editor(props) {
  const [v, setv] = useState("");

  function onChange(newValue) {
    props.val(newValue);
  }
  function OnClick() {
    console.log(v);
  }

  async function run() {
    const res = await fetch(
      "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&fields=*",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-rapidapi-key":
          "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
        },
        body: {
          stdin: "",
          language_id: "",
          source_code: "",
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

  return (
    <>
      <AceEditor
        mode="javascript"
        theme="github"
        onChange={onChange}
        value={props.actualVal}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      />
     
    </>
  );
}
export default editor;



{/* <div>
<button className={Style.buttonn} onClick={OnClick} >
  Run
</button>
<button className={Style.buttonn} > Reset</button>
</div>

this was added just below the editor in this page  */}
