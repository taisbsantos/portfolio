'use client'

import styles from './experience.module.css'

function Experience() {
    return (
        <main className={styles.main} id="experience">
            <div className={styles.experience}>

                <div className={styles.halfCircle}>
                    <h1>Professional Experience</h1>
                </div>
                <div className={styles.experienceItem}>
                    <div className={styles.experienceInfo}>
                        <h2 className={styles.date}>jun/2021 - apr/2023</h2>
                        <h2 className={styles.title}>
                            Software developer Intern - Mobicare
                        </h2>
                    </div>
                    <p className={styles.description}>
                        I have experience working on different projects, creating new features and maintaining web applications.
                        These projects were developed using a variety of technologies, including Java, Quarkus, Spring Boot, Node.js
                        and NestJS. I have also worked with frontend technologies such as React.js.
                    </p>

                </div>
            </div>
        </main>
    );
}

export default Experience;