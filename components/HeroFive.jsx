import React from "react";
import { ButtonsList } from "./ButtonsList";
import { CodeSnippet } from "./CodeSnippet";

const HeroFive = () => {
  return (
    <div className="heroFiveDisplay">
      <ButtonsList
        title={"Python"}
        para={"A popular programming language"}
        btnOne={"Learn Python"}
        btnTwo={"Python Reference"}
        btnThree={"Python Fun"}
        btnFour={"Get Certified"}
      />
      <CodeSnippet />
    </div>
  );
};

export default HeroFive;
