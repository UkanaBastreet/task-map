import React, { ButtonHTMLAttributes } from "react";
import s from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  secondary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, secondary, ...props }) => {
  return (
    <>
      <button {...props} className={s.Button}>
        {children}
      </button>
    </>
  );
};

export default Button;
