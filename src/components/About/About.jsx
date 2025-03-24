import React from 'react'
import styles from './About.module.css'
import { getImageUrl } from '../../utils'
import aboutImageUrl from "/public/assets/about/aboutImage.png";
import cursorIconUrl from "/public/assets/about/cursorIcon.png";
import serverIconUrl from "/public/assets/about/serverIcon.png";
import uiIconUrl from "/public/assets/about/uiIcon.png";

export const About = () => {
return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
            <img
                src={aboutImageUrl}
                alt="Me sitting with a laptop"
                className={styles.aboutImage} />
            <div >
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={cursorIconUrl} alt="Cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                I'm a frontend developer with experience in building responsive
                                and optimized sites
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={serverIconUrl} alt="Server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                                I have experience developing fast and optimised back-end systems
                                and APIs
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={uiIconUrl} alt="UI icon" />
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>
                                I have designed multiple landing pages and have created design
                                systems as well
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
);
};
