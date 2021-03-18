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
          {/* <div className ={styles.code_editor}>
            
            <Editor/>
          
          </div> */}

          

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
