'use client'

import styles from './education.module.css'

function Education() {
    return (
        <main className={styles.main} id="education">
            <div className={styles.education}>
                <div className={styles.halfCircle}>
                    <h1>Education</h1>
                </div>
                <div className={styles.timeline}>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDate}>mar/2017 - jul/2024</div>
                        <div className={styles.timelineContent}>
                            <h2>Computer Science Degree</h2>
                        </div>
                    </div>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDate}>mar/2013 - dec/2015</div>
                        <div className={styles.timelineContent}>
                            <h2>Technical Course in Computer Science</h2>
                        </div>
                    </div>
                    {/* Adicione mais itens da linha do tempo aqui */}
                </div>
            </div>
        </main>
    );
}

export default Education;