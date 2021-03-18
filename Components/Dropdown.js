import React from 'react'
import styles from './Dropdown.module.css'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Dropdown() {
    return (
       <div class={styles.lang}>

<div className=" dropdown">
            <select className="  form-control" >
            <option>CPP</option>
                <option>Java</option>
                <option>JavaScript</option>
                <option>Python</option>
               
            </select>
        </div>

       </div>
           

        
      
    )
}

