import { Recipe } from "../Recipe";
import styles from "./styles.module.scss";

export function OurBestRecipes() {
  return (
    <section className={styles.recipes}>
      <h1>Our Best Recipes</h1>
      <span>
        Far far away, behind the word mountains, far from the countries <br />
        Vokalia and Consonantia, there live the blind texts.
      </span>
      <div className={styles.recipesList}>
        <Recipe name="Broccoli Salad with Bacon" id={1} />
        <Recipe name="Classic Beef Burguers" id={2} />
        <Recipe name="Classic Potato Salad" id={3} />
        <Recipe name="Cherry Cobbler on the Grill" id={4} />
      </div>
    </section>
  );
}
