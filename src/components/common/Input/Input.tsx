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
        <div className="text-[16px] text-black-500">{title}</div>
        <input
          type={type ? type : "text"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="text-[16px] text-black-500 w-[100%] p-[16px] h-[48px] outline-none border border-gray-300 rounded-[4px] placeholder-gray-400 focus:outline-none  focus:border-gray-400 focus:border-2 "
        />
      </div>
    </>
  );
};

export default Input;
