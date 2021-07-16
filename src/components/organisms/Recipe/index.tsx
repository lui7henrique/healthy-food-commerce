import styles from "./styles.module.scss";

type RecipeType = {
  name: string;
  id: number;
};

export function Recipe({ name, id }: RecipeType) {
  return (
    <div className={styles.recipe}>
      <img src={`comida_${id}.svg`} alt={`${name} recipe`} />
      <div>
        <h1>{name}</h1>
        <button>See recipe</button>
      </div>
    </div>
  );
}
