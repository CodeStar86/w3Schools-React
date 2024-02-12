import React from "react";
import { HeroSevenContent } from "../components/HeroSevenContent";

export const HeroSeven = () => {
  return (
    <div className="HeroSevenContent">
      <div>
        <HeroSevenContent
          title={"PHP"}
          para={"A web serving programming language"}
          btn={"Learn PHP"}
        />
        <HeroSevenContent
          title={"Java"}
          para={"A programming language"}
          btn={"Learn Java"}
        />
        <HeroSevenContent
          title={"W3.CSS"}
          para={"A CSS framework for faster and better responive web pages"}
          btn={"Learn PHP"}
        />
      </div>
      <div>
        <HeroSevenContent
          title={"JQuery"}
          para={"A JS library for developing web pages"}
          btn={"Learn JQuery"}
        />
        <HeroSevenContent
          title={"C++"}
          para={"A programming language"}
          btn={"Learn C++"}
        />
        <HeroSevenContent
          title={"Bootstrap"}
          para={"A CSS framework for designing better web pages"}
          btn={"Bootstrap"}
        />
      </div>
    </div>
  );
};
