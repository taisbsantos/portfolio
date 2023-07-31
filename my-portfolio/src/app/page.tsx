import Presentation from '@/components/Presentation'
import ResponsiveAppBar from '@/components/AppBar'
import Footer from '@/components/Footer'
import styles from './page.module.css'
import Experience from '@/components/ProfessionalExperience'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import More from '@/components/More'

export default function Home() {
  return (
    <div className={styles.body}>
      <ResponsiveAppBar />
      <Presentation/>
      <Experience/>
      <Education/>
      <Skills/>
      <More/>
      <Footer/>
    </div>

  )
}
