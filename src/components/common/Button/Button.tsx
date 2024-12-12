import React, { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
  handleClick: () => void;
}

const Button = ({ children, handleClick }: IButtonProps) => {
  return (
    <>
      <button type="button" onClick={handleClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
