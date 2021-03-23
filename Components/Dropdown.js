import React, { useState } from "react";
import styles from "./Dropdown.module.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.css'

export default function Dropdown(props) {
  // const [lang, setLang] = useState('Java');
  // function onChange(ln) {
  //   props.val(ln);
  // }
  const changlang=(langu)=>{
    console.log("selected lang", langu.target.value)
    props.selectedlang(langu.target.value);
    // setLang(langu.target.value)

    
  }
  

  return (
    <div className={styles.lang}>
      <div className=" dropdown">
        <select
          className="  form-control"
          onClick={changlang}
          style={{ backgroundColor: "#ee6e73" }}
          // value="python"
        >
          <option style={{ backgroundColor: "white" }} value={'c_cpp'} >CPP</option>
          <option style={{ backgroundColor: "white" }} value={'java'}>Java</option>
          <option style={{ backgroundColor: "white" }} value={'javascript'}>JavaScript</option>
          <option style={{ backgroundColor: "white" }} value={'python'}>Python</option>
        </select>
      </div>
    </div>
  );
}
