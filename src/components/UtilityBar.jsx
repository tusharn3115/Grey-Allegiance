import React from "react";
import Logo from "../assets/logo.png";
import { IoTimeOutline } from "react-icons/io5";
import UtilityBarDetails from "./UtilityBarDetails";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const UtilityBar = () => {
  return (
    <div className="w-[1140px] mx-auto pt-8 flex items-center justify-between">
      {/* logo */}
      <div className="logo flex items-center gap-2">
        <img src={Logo} alt="logo" className="w-[75px]" />
        <h1>
          <span className="text-[1.6rem] font-semibold">GREY</span> <br />
          <span className="text-zinc-600 text-md font-medium">ALLEGIANCE</span>
        </h1>
      </div>

      {/* details */}
      <div className="details flex items-center justify-evenly gap-8">
        <UtilityBarDetails
          logo={<IoTimeOutline size="35" />}
          title="WORKING HOURS"
          desc="Moday - Sunday: 8.00am to 10.30pm"
        />
        <UtilityBarDetails
          logo={<FaPhone size="35" />}
          title="CALL US"
          desc="+91 00000 00000"
        />
        <UtilityBarDetails
          logo={<IoIosMail size="35" />}
          title="MAIL US"
          desc="greyallegiance@gmail.com"
        />
      </div>
    </div>
  );
};

export default UtilityBar;
