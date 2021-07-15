import styles from "./styles.module.scss";

type PostType = {
  name: string;
  id: number;
  author: string;
};

export function Post({ name, id, author }: PostType) {
  return (
    <div className={styles.post}>
      <img src={`blog_image_${id}.svg`} alt="" />

      <div>
        <h1>{name}</h1>
        <div>
          <img src={`author_${id}.jpg`} alt="" className={styles.author} />
          <span>{author}</span>
        </div>
      </div>
    </div>
  );
}
