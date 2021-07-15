import { Field } from "../Field";
import styles from "./styles.module.scss";

export function JoinOurMembership() {
  return (
    <div className={styles.container}>
      <div>
        <h1>
          Join our membership to
          <br /> get special offer
        </h1>
        <Field
          type="join"
          name="Enter your email address"
          placeholder="Enter your email address"
        />
      </div>
      <img src="bloco_final_image.svg" alt="" />
    </div>
  );
}
