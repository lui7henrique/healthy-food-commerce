import { InputHTMLAttributes } from "react";
import { MdSearch } from "react-icons/md";
import styles from "./styles.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
}

export function Field({ placeholder }: InputProps) {
  return (
    <div className={styles.field}>
      <input placeholder={placeholder} />

      <button>
        <MdSearch size={20} />
      </button>
    </div>
  );
}
