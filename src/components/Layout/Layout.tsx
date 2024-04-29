import { FC, ReactNode } from "react";
import "./Layout.css";
import Header from "./Header";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">
        <nav className="nav">nav</nav>
        <section className="content">{children}</section>
        <aside className="aside">aside</aside>
      </main>
    </>
  );
};

export default Layout;
