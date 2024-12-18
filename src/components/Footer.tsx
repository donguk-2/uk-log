import React from "react";
import mail from "../images/mail.svg";
import github from "../images/github.svg";

const Footer = () => {
  return (
    <>
      <div className="w-[100%] flex flex-col items-start text-mainColor text-[12px] gap-[20px] -translate-y-[100%] items-center">
        <div className="flex  gap-[10px]">
          <div className="flex items-center gap-[5px]">
            <img className="w-[18px] h-[18px]" src={mail} alt="" />
            donguk3192@gmail.com
          </div>
          <div className="flex items-center gap-[5px]">
            <img className="w-[18px] h-[18px]" src={github} alt="" />
            donguk-2
          </div>
        </div>
        <div>소개글</div>
      </div>
    </>
  );
};

export default Footer;
