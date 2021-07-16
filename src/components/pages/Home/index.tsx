import { Footer } from "../../molecules/Footer";
import { JoinOurMembership } from "../../organisms/JoinOurMembership";
import { MainHeader } from "../../organisms/MainHeader";
import { OurBestRecipes } from "../../organisms/OurBestRecipes";
import { ReadOurBlog } from "../../organisms/ReadOurBlog";
import { TheBestServices } from "../../organisms/TheBestServices";
import styles from "./styles.module.scss";

export function Home() {
  return (
    <div className={styles.container}>
      <MainHeader />
      <OurBestRecipes />
      <TheBestServices />
      <ReadOurBlog />
      <JoinOurMembership />
      <Footer />
    </div>
  );
}
