import React from "react";
import { layout } from "../../styles/style";
import Header from "./Header";

const Layout: React.FC<{ children: JSX.Element }> = (props) => {
  const { children } = props;
  return (
    <div>
      <nav />
      <div className={`${layout.flex.col.spaceBetween}`}>
        <Header />
        <main className=" h-full">{children}</main>
        <footer></footer>
      </div>
    </div>
  );
};

export default Layout;
