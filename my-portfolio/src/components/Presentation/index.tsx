'use client'

import styles from './presentation.module.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import professional from '../../assets/img/working.svg'

function Presentation() {
    return (
        <main className={styles.main} id="presentation">
            <div className={styles.presentation}>
                <div className={styles.halfCircle}>
                    <h1>Full Stack Developer</h1>
                </div>
                
                <p className={styles.description}>
                    I am a Science Computer student at Universidade Federal de Viçosa - campus Florestal.
                    I'm  a Full Stack Developer with expertise in Java, Node.js and React.
                    My first professional experience was as a Software Developer Intern. During this internship,
                    I worked on maintaining and building projects using different technologies.
                    I learned how to build scalable software, apply good coding practices, and also developed my soft skills.
                </p>

                <div  className={styles.contact}>
                    <a className={styles.link} href="https://www.linkedin.com/in/taisbsantos/" ><LinkedInIcon fontSize='large'/></a>
                    <a className={styles.link} href="https://github.com/taisbsantos"><GitHubIcon fontSize='large'/></a>
                    <MailIcon fontSize='large'/> taisbsantos1@gmail.com
                </div>
            </div>
            <img src={professional.src} className={styles.myPhoto}/>
        </main>
    );
}

export default Presentation;