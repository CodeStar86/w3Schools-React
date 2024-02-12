import React from "react";
import { ButtonsList } from "./ButtonsList";
import { CodeSnippet } from "./CodeSnippet";

const HeroSix = ( ) => {
  return (
    <div className="heroSixDisplay">
      <ButtonsList
        title={"SQL"}
        para={"The language for accessing databases"}
        btnOne={"Learn SQL"}
        btnTwo={"SQL Reference"}
        btnThree={"SQL Fun"}
        btnFour={"Get Certified"}
      />
      <CodeSnippet/>
    </div>
  );
};

export default HeroSix;