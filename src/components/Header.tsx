import React, { useEffect } from "react";
import useLoginCheck from "../hooks/useLoginCheck";
import Login from "./Login";

const Header = () => {
  const [isLogin, loginCheck] = useLoginCheck();

  useEffect(() => {}, []);

  return (
    <>
      <div className="flex w-screen p-5">
        <div className="">UKLog</div>
        <div className="flex ml-5 gap-5">
          <div>전체글</div>
          <div>프로젝트</div>
          <div>내 소개글</div>
        </div>
        <div className="ml-auto">
          <div>로그인/로그아웃</div>
          <div>image</div>
        </div>
        <Login />
      </div>
    </>
  );
};

export default Header;
