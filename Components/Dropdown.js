import React from 'react'
import styles from './Dropdown.module.css'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css'

export default function Dropdown() {
    return (
       <div className={styles.lang}>

<div className=" dropdown"   >
            <select className="  form-control"   style={{ backgroundColor:'#ee6e73'}}>
            <option style={{ backgroundColor:'white'}}>CPP</option>
                <option style={{ backgroundColor:'white'}}>Java</option>
                <option style={{ backgroundColor:'white'}}>JavaScript</option>
                <option style={{ backgroundColor:'white'}}>Python</option>
               
            </select>
        </div>

       </div>
           

        
      
    )
}


