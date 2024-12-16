import React, { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
  handleClick: () => void;
  customStyle?: string;
}

const Button = ({ children, handleClick, customStyle }: IButtonProps) => {
  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={`w-[100%] h-[48px] bg-mainColor text-[16px] text-white rounded-[4px] ${customStyle}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
