import styles from "./styles.module.scss";
export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&#169; Copyrights 2019 Stack. All Rights Reserved.</p>
      <div>
        <a href="/">Privacy Policy</a>
        <a href="/">Terms and Conditions</a>
      </div>
    </footer>
  );
}
