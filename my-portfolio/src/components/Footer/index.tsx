import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from './footer.module.css'
function Footer() {
  return (
    <footer  color="white" className={styles.footer}>
      <Toolbar>
        <Typography variant="body1" color="inherit">
          © {new Date().getFullYear()} Taís Santos. All rights reserved.
        </Typography>
      </Toolbar>
    </footer>
  );
}

export default Footer;