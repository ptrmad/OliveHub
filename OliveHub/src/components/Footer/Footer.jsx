import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <li>ptr.m.d 2024</li>
        <li>Github</li>
        <li>piotr.m.drozdzal@gmail.com</li>
      </div>
      <div>
        <li>About the Page</li>
        <li>Contact</li>
        <li>Support</li>
      </div>
      <div>
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
        <li>Partnership</li>
      </div>
    </div>
  );
}
