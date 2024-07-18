import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      <nav>nav</nav>
      <section className="content">{children}</section>
      <aside>aside</aside>
    </main>
  );
};

export default Layout;
