import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { SingleInfo } from "./SingleInfoSection";

export const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="Nightshiftmaster@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+972-547355910" Image={FiPhone} />
      <SingleInfo text="Tel Aviv, Israel" Image={IoLocationOutline} />
    </div>
  );
};
