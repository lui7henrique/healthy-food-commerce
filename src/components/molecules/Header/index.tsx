import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.container}>
      <img src="logo.png" alt="Logo Healthy Food" />
      <a href="/register">
        <button>Register</button>
      </a>
    </header>
  );
}
