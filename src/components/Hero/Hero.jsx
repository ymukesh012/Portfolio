import React from 'react'
import styles from "./Hero.module.css";
import {getImageUrl} from "../../utils"; 

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Mukesh.</h1>
            <p className={styles.content}>I am Full Stack Developer with one year of experiences.Reach me out click on contac me button</p>
            <a href="mailto:ymukesh012@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt='Heroimage of me' className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}
