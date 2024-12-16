import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import Input from "./common/Input/Input";
import Button from "./common/Button/Button";
import useLoginCheck from "../hooks/useLoginCheck";

interface ILoginProps {
  id: string;
  pw: string;
  setId: Dispatch<SetStateAction<string>>;
  setPw: Dispatch<SetStateAction<string>>;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const Login = ({
  id,
  pw,
  setId,
  setPw,
  setIsLogin,
  isModalOpen,
  setIsModalOpen,
}: ILoginProps) => {
  const [isLogin, loginCheck] = useLoginCheck();
  const [isVisible, setIsVisible] = useState<boolean>(isModalOpen);
  const bgRef = useRef(null);

  const modalStyle = {
    open: "animate-loginFadeIn ",
    close: "animate-loginFadeOut",
  };
  const loginStyle = {
    open: "animate-popFromBottom",
    close: "animate-goToBottom",
  };

  useEffect(() => {
    setIsLogin(isLogin);
    isLogin && (setIsVisible(false), setIsModalOpen(false));
  }, [isLogin]);

  const closeModal = () => {
    setIsVisible(false);

    setTimeout(() => {
      setIsModalOpen(false);
    }, 200);
  };

  return (
    <>
      <div
        className={`w-screen h-screen bg-modalBgColor absolute top-0 left-0 justify-center items-center z-10 flex ${
          isVisible ? modalStyle.open : modalStyle.close
        }`}
        ref={bgRef}
        onClick={(e) => {
          if (e.target === bgRef.current) {
            setId(""), setPw("");
            closeModal();
          }
        }}
      >
        <div
          className={`flex justify-center w-[500px] h-[500px] bg-white items-center shadow-modalBoxShadow rounded-[4px] ${
            isVisible ? loginStyle.open : loginStyle.close
          }`}
        >
          <div className="w-[400px] h-fit flex flex-col gap-[10px]">
            <div className="text-[21px]">로그인</div>
            <div className="flex flex-col gap-[30px] mb-[15px]">
              <Input
                title="아이디"
                value={id}
                onChange={(e) => {
                  setId(e.target.value);
                }}
              />
              <Input
                title="비밀번호"
                value={pw}
                type="password"
                onChange={(e) => {
                  setPw(e.target.value);
                }}
              />
            </div>
            <Button
              handleClick={() => {
                loginCheck(id, pw);
              }}
            >
              로그인
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
