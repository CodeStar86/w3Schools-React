import React from "react";

export const HeroSevenContent = ({ title, para, btn }) => {
  return (
    <div className="heroSevenDisplay">
      <div className="boxOne">
        <h1>{title}</h1>
        <p>{para}</p>
        <button>{btn}</button>
      </div>
    </div>
  );
};
