import React from "react";

export const ButtonsList = ({
  title,
  para,
  btnOne,
  btnTwo,
  btnThree,
  btnFour,
}) => {
  return (
    <div className="contentDisplay">
      <h1>{title}</h1>
      <p>{para}</p>
      <button className="btn1">{btnOne}</button>
      <button className="btn2">{btnTwo}</button>
      <button className="btn3">{btnThree}</button>
      <button className="btn4">{btnFour}</button>
    </div>
  );
};
