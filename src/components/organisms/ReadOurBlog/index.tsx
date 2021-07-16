import { Post } from "../../molecules/Post";
import styles from "./styles.module.scss";

export function ReadOurBlog() {
  return (
    <section className={styles.container}>
      <h1>Read Our Blog</h1>
      <p>
        Far far away, behind the word mountains, far from the countries
        <br /> Vokalia and Consonantia, there live the blind texts.
      </p>
      <div className={styles.carrousel}>
        <Post
          name="Quick-start guide to nuts and seeds"
          id={1}
          author="Scott P. Lopez"
        />
        <Post
          name="Nutrition: Tips for Improving Your Health "
          id={2}
          author="Diego S. Fernandes"
        />
        <Post
          name="The top 10 benefits of eating healthy"
          id={3}
          author="Mayk Brito"
        />
      </div>
    </section>
  );
}
