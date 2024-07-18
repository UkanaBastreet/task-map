import React, { FC, memo, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import s from "./Anchor.module.css";

interface AnchorProps {
  className?: string;
  links: link[];
}
interface link {
  id: string;
  title: string;
}
export const Anchor: FC<AnchorProps> = memo(({ links, className }) => {
  const location = useLocation();
  useEffect(() => {
    const element = document.getElementById(location.hash.substring(1));
    if (element) {
      element.scrollIntoView();
    }
  }, [location.hash]);

  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column" }}
        className={s.Anchor + " " + className}
      >
        <div className={s.Anchor__list}>
          {links.map((link) => (
            <Link
              key={"#" + link.id}
              className={
                location.hash.substring(1) === link.title
                  ? "link active"
                  : "link"
              }
              to={"#" + link.id}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
});
