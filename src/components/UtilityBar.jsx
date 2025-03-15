import React from "react";
import Logo from "../assets/logo.png";
import { IoTimeOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import UtilityBarDetails from "./UtilityBarDetails";

const UtilityBar = () => {
  return (
    <div className="border-b-2 border-zinc-100 w-full overflow-hidden px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-[1140px] mx-auto flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10">
        {/* Logo */}
        <div className="logo flex items-center gap-2 md:gap-0 p-3 sm:p-4">
          <img src={Logo} alt="logo" className="w-[50px] sm:w-[55px] md:w-[60px]" />
          <h1 className="text-center md:text-left">
            <span className="text-lg sm:text-xl md:text-[1rem] font-semibold">GREY</span> <br />
            <span className="text-zinc-600 text-xs md:text-sm font-medium">
              ALLEGIANCE
            </span>
          </h1>
        </div>

        {/* Details (Hidden on Phones) */}
        <div className="hidden sm:flex items-center justify-between w-full max-w-[650px]">
          <UtilityBarDetails
            logo={<IoTimeOutline size="28" className="md:size-7" />}
            title="WORKING HOURS"
            desc="Mon - Sun: 8.00 am - 10.30 pm"
          />
          <UtilityBarDetails
            logo={<FaPhone size="24" className="md:size-7" />}
            title="CALL US"
            desc="+91 00000 00000"
          />
          <UtilityBarDetails
            logo={<IoIosMail size="30" className="md:size-7" />}
            title="MAIL US"
            desc="greyallegiance@gmail.com"
          />
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;
