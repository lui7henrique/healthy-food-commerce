import React from "react";
import { MainHeader } from "./components/MainHeader";
import { OurBestRecipes } from "./components/OurBestRecipes";
import { ReadOurBlog } from "./components/ReadOurBlog";
import { TheBestServices } from "./components/TheBestServices";
import { JoinOurMembership } from "./components/JoinOurMembership";
import { Footer } from "./components/Footer";
import "./styles/home.scss";

function App() {
  return (
    <div className="container">
      <MainHeader />
      <OurBestRecipes />
      <TheBestServices />
      <ReadOurBlog />
      <JoinOurMembership />
      <Footer />
    </div>
  );
}

export default App;
