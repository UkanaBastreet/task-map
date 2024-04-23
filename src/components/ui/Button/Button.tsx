import React from "react";
import s from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <>
      <button className={s.Button}>{children}</button>
    </>
  );
};

export default Button;