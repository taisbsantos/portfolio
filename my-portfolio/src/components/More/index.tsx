'use client'
import { Icon } from '@iconify/react';

import styles from './more.module.css'

function More() {
    return (
        <main className={styles.main} id="more">
            <div className={styles.skills}>
                <div className={styles.halfCircle}>
                    <h1>More</h1>
                </div>
                <div className={styles.more}>
                    <h1>What Languages I speak?</h1>
                    <p>- English (B1 Level)</p>
                    <p>- Spanish (B1 Level)</p>
                    <p>- Portuguese (Native)</p>
                </div>
                <div className={styles.more}>
                    <h1>What I do during my Degree?</h1>
                    <p>- Programming Competitions (SBC, Maratona Mineira and others) </p>
                    <p>- Participation in an extension Project (Minas Coders) </p>
                    <p>- Underdegree Research (NuPPESC) - developing </p>
                    <div />
                </div>
                <div className={styles.more}>
                    <h1>What are my soft skills?</h1>
                    <p>- Team Work</p>
                    <p>- Adaptability </p>
                    <p>- Proactivity</p>
                    <p>- Critical thinking</p>
                    <div />
                </div>
            </div>
        </main>
    );
}

export default More;