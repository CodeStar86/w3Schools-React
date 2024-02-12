import React from "react";
import { Nav } from "../../components/Nav";
import { HeroOne } from "../../components/HeroOne";
import HeroTwo from "../../components/HeroTwo";
import HeroThree from "../../components/HeroThree";
import HeroFour from "../../components/HeroFour";
import HeroFive from "../../components/HeroFive";
import HeroSix from "../../components/HeroSix";
import { HeroSeven } from "../../components/HeroSeven";
import { Footer } from "../../components/Footer";

const Home = () => {
  return (
    <div className="container bgWhite">
      <Nav />
      <HeroOne />
      <HeroTwo />
      <HeroThree />
      <HeroFour />
      <HeroFive />
      <HeroSix />
      <HeroSeven />
      <Footer />
    </div>
  );
};

export default Home;
