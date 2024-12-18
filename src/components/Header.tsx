import React, { useEffect, useState } from "react";
import useLoginCheck from "../hooks/useLoginCheck";
import Login from "./Login";
import Button from "./common/Button/Button";

const Header = () => {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex w-full py-[20px] items-center">
        <div className="">UKLog</div>
        <div className="flex ml-5 gap-5">
          <div>전체글</div>
          <div>프로젝트</div>
          <div>내 소개글</div>
        </div>
        <div className="ml-auto">
          {isLogin ? (
            <Button
              handleClick={() => {
                setIsLogin(false), setId(""), setPw("");
              }}
              customStyle="px-[8px] py-[4px] h-fit"
            >
              로그아웃
            </Button>
          ) : (
            <Button
              handleClick={() => setIsModalOpen(true)}
              customStyle="px-[8px] py-[4px] h-fit"
            >
              로그인
            </Button>
          )}
        </div>

        {isModalOpen && (
          <Login
            id={id}
            pw={pw}
            setId={setId}
            setPw={setPw}
            setIsLogin={setIsLogin}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        )}
      </div>
    </>
  );
};

export default Header;
