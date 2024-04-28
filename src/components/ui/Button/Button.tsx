import React, { HTMLAttributes } from "react";
import s from "./Button.module.css";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <>
      <button className={s.Button + " " + className} {...props}>
        {children}
      </button>
    </>
  );
};

export default Button;
