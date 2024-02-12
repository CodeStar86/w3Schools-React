import React from "react";
import { ButtonsList } from "./ButtonsList";
import { CodeSnippet } from "./CodeSnippet";

const HeroFour = ( ) => {
  return (
    <div className="heroFourDisplay">
      <ButtonsList
        title={"Javascript"}
        para={"The language for programming web pages"}
        btnOne={"Learn CSS"}
        btnTwo={"Javascript Reference"}
        btnThree={"Javascript Fun"}
        btnFour={"Get Certified"}
      />
      <CodeSnippet/>
    </div>
  );
};

export default HeroFour;