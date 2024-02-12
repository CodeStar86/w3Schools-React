import React from "react";
import { ButtonsList } from "../components/ButtonsList";
import { CodeSnippet } from "./CodeSnippet";

const HeroThree = ( ) => {
  return (
    <div className="heroThreeDisplay">
      <ButtonsList
        title={"CSS"}
        para={"The language for styling web pages"}
        btnOne={"Learn CSS"}
        btnTwo={"CSS Reference"}
        btnThree={"CSS Fun"}
        btnFour={"Get Certified"}
      />
      <CodeSnippet/>
    </div>
  );
};

export default HeroThree;