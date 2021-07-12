import React from "react";
import { MainHeader } from "./components/MainHeader";
import { OurBestRecipes } from "./components/OurBestRecipes";
import "./styles/home.scss";

function App() {
  return (
    <div className="container">
      <MainHeader />
      <OurBestRecipes />
    </div>
  );
}

export default App;
