import Header from "../Header";
import { Field } from "../Field";
import styles from "./styles.module.scss";

export function MainHeader() {
  return (
    <section className={styles.container}>
      <Header />
      <div>
        <div>
          <p>
            Ready for <br />
            Trying a new recipe?
          </p>
          <Field
            placeholder="Search healthy recipes"
            name="SearchRecipes"
            type="search"
          />
        </div>
        <img src="Illustration.svg" alt="" />
      </div>
    </section>
  );
}
