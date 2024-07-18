import { FC, HTMLAttributes, ReactNode } from "react";
import styles from "./Card.module.css";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className: string;
}

export const Card: FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <>
      <div className={styles.Card + " " + className} {...props}>
        {children}
      </div>
    </>
  );
};
