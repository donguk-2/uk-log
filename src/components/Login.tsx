import React from "react";
import Input from "./common/Input/Input";
import Button from "./common/Button/Button";

const Login = () => {
  return (
    <>
      <div className="w-full h-full bg-slate-300 fixed z-1 top-0 left-0 flex justify-center items-center">
        <div className="flex justify-center w-[500px] h-[500px] bg-red-700 items-center">
          <div className="w-[400px] h-[300px] flex flex-col gap-[10px]">
            <div className="text-[35px]">로그인</div>
            <div className="flex flex-col gap-[30px]">
              <Input title="아이디" value={""} onChange={() => {}} />
              <Input title="비밀번호" value={""} onChange={() => {}} />
            </div>
            <Button handleClick={() => {}}>로그인</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
