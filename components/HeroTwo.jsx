import React from "react";
import { ButtonsList } from "../components/ButtonsList";
import { CodeSnippet } from "./CodeSnippet";

const HeroTwo = ( ) => {
  return (
    <div className="heroTwoDisplay">
      <ButtonsList
        title={"HTML"}
        para={"The language for building web pages"}
        btnOne={"Learn HTML"}
        btnTwo={"Video Tutorial"}
        btnThree={"HTML reference"}
        btnFour={"Get Certified"}
      />
      <CodeSnippet />
    </div>
  );
};

export default HeroTwo;
