import { Recipe } from "../Recipe";
import styles from "./styles.module.scss";

export function OurBestRecipes() {
  return (
    <section className={styles.recipes}>
      <div className={styles.container}>
        <h1>Our Best Recipes</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          <br /> Vokalia and Consonantia, there live the blind texts.
        </p>

        <div className={styles.cardList}>
          <Recipe name="Broccoli Salad with Bacon" id={1} />
          <Recipe name="Broccoli Salad with Bacon" id={2} />
          <Recipe name="Broccoli Salad with Bacon" id={3} />
          <Recipe name="Broccoli Salad with Bacon" id={4} />
        </div>
      </div>
    </section>
  );
}
