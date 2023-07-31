'use client'
import { Icon } from '@iconify/react';

import styles from './skills.module.css'

function Skills() {
    return (
        <main className={styles.main} id="skills">
            <div className={styles.skills}>
                <div className={styles.halfCircle}>
                    <h1>Skills</h1>
                </div>
                <div >
                    <Icon icon='devicon:java-wordmark' style={{ fontSize: '48px' }} className={styles.stacks}/>
                    <Icon icon='devicon:quarkus-wordmark' style={{ fontSize: '48px' }} className={styles.stacks}/>
                    <Icon icon='devicon:spring-wordmark' style={{ fontSize: '48px' }} className={styles.stacks}/>
                    <Icon icon='vscode-icons:file-type-js-official' style={{ fontSize: '48px' }} className={styles.stacks}/>
                    <Icon icon='devicon:nodejs-wordmark' style={{ fontSize: '48px' }} className={styles.stacks}/>
                    <Icon icon='devicon-plain:nestjs-wordmark' style={{ fontSize: '48px' , color: '#e0234e'}} className={styles.stacks}/>
                    <Icon icon='skill-icons:typescript' style={{ fontSize: '48px' }} className={styles.stacks}/>
                    <Icon icon='logos:html-5' style={{ fontSize: '48px' }} className={styles.stacks}/>
                    <Icon icon='logos:css-3' style={{ fontSize: '48px' }} className={styles.stacks}/>
                    <Icon icon='logos:mysql' style={{ fontSize: '48px' }} className={styles.stacks}/>
                    <Icon icon='devicon:hibernate-wordmark' style={{ fontSize: '48px' }} className={styles.stacks}/>
                    <Icon icon='logos:git' style={{ fontSize: '48px' }} className={styles.stacks}/>
                    <Icon icon='logos:aws' style={{ fontSize: '48px' }} className={styles.stacks}/>
                </div>
            </div>
        </main>
    );
}

export default Skills;