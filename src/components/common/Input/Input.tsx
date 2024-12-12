import React, { ChangeEvent } from "react";

interface IInputProps {
  title: string;
  value: any;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
}

const Input = ({ title, value, onChange, type, placeholder }: IInputProps) => {
  return (
    <>
      <div className="w-[100%] flex flex-col gap-[10px]">
        <div className="text-[24px] font-medium">{title}</div>
        <input
          type={type ? type : "text"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="text-[18px] text-black-500 w-[100%] p-[5px] h-[48px]"
        />
      </div>
    </>
  );
};

export default Input;
