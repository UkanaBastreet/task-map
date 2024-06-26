import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header>
      <span>
        <h1>Task Map</h1>
      </span>
      <span>
        <Link to={"/auth"}>Sign In</Link>
        <Link to={"/registration"}>Sign Up</Link>
      </span>
    </header>
  );
};

export default Header;
