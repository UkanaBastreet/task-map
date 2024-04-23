import { FC, HTMLAttributes, InputHTMLAttributes } from "react";
import "./Input.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = (props) => {
  return (
    <>
      <input className={"Input"} {...props} />
    </>
  );
};

export default Input;
