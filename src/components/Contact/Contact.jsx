import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css"
import emailIconUrl from "/public/assets/contact/emailIcon.png";
import linkedinIconUrl from "/public/assets/contact/linkedinIcon.png";
import githubIconUrl from "/public/assets/contact/githubIcon.png";



export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}><h2>Contact</h2>
        <p>Feel free to reach out</p></div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={emailIconUrl} alt="Email Icon" />
                <a href="malito: muyengwatakunda@gmail.com">muyengwatakunda@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={linkedinIconUrl} alt="LinkedIn Icon" />
                <a href="https:/www.linkedin.com/emmanuelmuyengwa">linkedin.com/emmanuelmuyengwa</a>
            </li>
            <li className={styles.link}>
                <img src={githubIconUrl} alt="Github Icon" />
                <a href="https:/www.github.com/emmanuelmuyengwa">github.com/emmanuelmuyengwa</a>
            </li>
        </ul>
    </footer>
  )
}
