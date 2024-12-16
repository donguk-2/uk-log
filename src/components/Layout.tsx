import React from "react";
import Header from "./Header";

const Layout = () => {
  const IsLogin = React.createContext(false);
  return (
    <>
      <IsLogin.Provider value={false}>
        <Header />
      </IsLogin.Provider>
    </>
  );
};

export default Layout;
