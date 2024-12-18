import React, { Children, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <div className="sl1:w-full sl2:w-[1024px] sl3:w-[1376px] sl4:w-[1920px] ml-auto mr-auto h-auto min-h-screen">
        <Header />
        {children}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
