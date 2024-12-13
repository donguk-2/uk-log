import React, { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
  handleClick: () => void;
  customStyle?: string;
}

const Button = ({ children, handleClick }: IButtonProps) => {
  const customStyle = "";
  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={`w-[100%] h-[48px] bg-lime-400 mt-[15px] text-[24px]`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
