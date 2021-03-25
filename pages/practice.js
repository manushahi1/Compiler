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
  const [lang, setLang] = useState("c_cpp");

  const [editorVal, setEditor] = useState("");
  const [codes, setCodes] = useState({
    c_cpp: "",
    javascript: "",
    python: "",
    java: "",
  });

  useEffect(() => {
    updateCode();
  }, [editorVal]);

  useEffect(() => {
    if (codes[lang] === "") {
      setEditor("");
    }
  }, [lang]);
  const updateCode = () => {
    if (lang === "python") {
      setCodes({ ...codes, python: editorVal });
    } else if (lang === "c_cpp") {
      setCodes({ ...codes, c_cpp: editorVal });
    } else if (lang === "java") {
      setCodes({ ...codes, java: editorVal });
    } else if (lang === "javascript") {
      setCodes({ ...codes, javascript: editorVal });
    }
  };

  function onChange(e) {
    setInput(e.target.value);
    console.log(e.target.value);
  }

  const editorInput = async (val) => {
    console.log(codes[val]);
    setEditor(val);
  };
  const lan = (la) => {
    console.log("recived from middle", la);
    setLang(la);
  };
  console.log("the language selected forn your coding problem is", lang);

  const resetCode = () => {
    setEditor("");
    setInput("");
    console.log(editorVal);
  };

  function submitForm() {
    console.log(codes[lang]);
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
    setOut(`code :- ${codes[lang]} input:= ${input}`);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <Navbar lan={lan} />
      </div>

      <div
        className="container-fluid"
        style={{ display: "flex", flexDirection: "row", flex: "1" }}
      >
        <div
          className="row"
          style={{  flex: "0.5",overflowY: "scroll", height: "100vh" ,  resize:"horizontal"}}
        ></div>
        <div className="row" style={{ flex: "0.5",  resize:"horizontal"}}>
          <Editor val={editorInput} actualVal={codes[lang]} lan={lang} />
        </div>
      </div>

      <div className="container-fluid" style={{ flex: "1" }}>
        <button className={styles.runn} onClick={submitForm}>
          Run
        </button>

        <button className={styles.reset} onClick={resetCode}>
          Reset
        </button>

        <div
          className={styles.io_container}
          style={{ display: "flex", flexDirection: "row", width: "85vw" }}
        >
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
          <div
            className={styles.output_container}
            style={{ display: "flex", flexDirection: "column", width: "40vw" }}
          >
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
