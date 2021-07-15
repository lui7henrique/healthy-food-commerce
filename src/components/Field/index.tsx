import { InputHTMLAttributes } from "react";
import { MdSearch } from "react-icons/md";
import styles from "./styles.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: "search" | "join";
}

export function Field({ placeholder, type }: InputProps) {
  return (
    <div className={styles.field}>
      <input placeholder={placeholder} />

      <button>{type === "search" ? <MdSearch size={20} /> : "Join"}</button>
    </div>
  );
}
