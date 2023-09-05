import styles from './Footer.module.css'
export default function Footer(){
  // Your component logic and state can go here

  return (
    <footer className={styles.footer}>
        <p className={styles.copyright}>
            &copy; Copyright { new Date().getFullYear()} by Worldwise Inc. 
        </p>
    </footer>
  );
}
