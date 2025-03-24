import React from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils';
import heroImgUrl from "/public/assets/hero/heroImage.png";

export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Emmanuel</h1>
        <p className={styles.description}>I am a full-stack developer.</p>
        <a className={styles.contactbtn} href="mailto:muyengwatakunda@gmail.com">Contact Me</a>
    </div>
    <img className={styles.heroImg}
     src={heroImgUrl}  alt="Hero" />
    <div className={styles.topBlur}/> 
    <div className={styles.bottomBlur}/> 
  </section>
}
