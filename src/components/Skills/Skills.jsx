import React from 'react'
import styles from './Skills.module.css'
import {FaHtml5, FaCss3, FaJs,FaReact} from "react-icons/fa6";

function Skills() {
    return (
        <div className={styles.Skills_con}>
            <div class="bg-img">
            <h3 className={styles.Skills_title}>Me Skill Set</h3>
            <ul className={styles.Skills_list}>
                <li><FaHtml5/></li>
                <li><FaCss3/></li>
                <li><FaJs/></li>
                <li><FaReact/></li>
            </ul>
            </div>
        </div>
    )
}

export default Skills
