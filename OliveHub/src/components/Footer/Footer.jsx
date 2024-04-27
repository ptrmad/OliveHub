import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerSection}>
        <li>ptr.m.d 2024</li>
        <li>Github</li>
        <li>piotr.m.drozdzal@gmail.com</li>
      </div>
      <div className={styles.footerSection}>
        <li>About the Page</li>
        <li>Contact</li>
        <li>Support</li>
      </div>
      <div className={styles.footerSection}>
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
        <li>Partnership</li>
      </div>
    </div>
  );
}
