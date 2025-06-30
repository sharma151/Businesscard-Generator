/* eslint-disable react/prop-types */
import "../style/Templates/Template2.scss";
import DownloadButton from "../Components/DownloadButton";

import { HiOutlineMail } from "react-icons/hi";
import { TfiJoomla } from "react-icons/tfi";
import { useRef } from "react";
import { HiPhone } from "react-icons/hi2";

const Template2 = ({ temp2Data }) => {
  const targetRef = useRef(null);

  return (
    <>
      <div className="w-max">
        <div
          className="
          transform origin-top-left
          relative z-10
          "
          style={{ maxWidth: "370px" }}
        >
          <div
            ref={targetRef}
            className="template2 relative  bg-white overflow-hidden shadow-xl rounded-[5px] w-[370px] h-[220px] scale-[0.95] sm:scale-100 "
          >
            <div className="relative w-full h-full">
              {/* Background shape using clip-path (in SCSS) */}
              <div className="temp2-bg"></div>

              {/* Website */}
              <div className="temp2-web absolute bottom-[15px] left-0 text-white text-[12px] text-center uppercase leading-[1] w-[216px] px-[20px] py-[6px]">
                <small>{temp2Data?.website || "www.yourwebsite.com"}</small>
              </div>

              {/* Logo */}
              <div className="company-logo absolute text-[50px] text-[#be0045] rotate-45 left-[75px] top-[15px]">
                <TfiJoomla />
              </div>

              {/* Name & Designation */}
              <div className="temp2-content absolute top-[90px] left-[14px] w-[250px] h-[90px]">
                <p className="m-0 underline text-[18px] font-bold uppercase leading-[0.8] text-black">
                  {temp2Data.fname && temp2Data.lname
                    ? `${temp2Data.fname} ${temp2Data.lname}`
                    : "Your Name"}
                </p>
                <small className="text-gray-500 uppercase text-[12px]">
                  {temp2Data.designation || "Designation"}
                </small>
              </div>

              {/* Phone Icon */}
              <div className="phone-h absolute top-[114px] right-[157px] w-[24px] h-[16px] text-white text-[12px] bg-black flex items-center justify-center z-10">
                <HiPhone />
              </div>

              {/* Phone Number */}
              <div className="phone-v absolute top-[112px] left-[220px] text-white text-[12px] z-10">
                <small>
                  {temp2Data.countryCode && temp2Data.phoneNumber
                    ? `+${temp2Data.countryCode} - ${temp2Data.phoneNumber}`
                    : "+91-98xxxxxx98"}
                </small>
              </div>

              {/* Email Icon */}
              <div className="email-h absolute top-[146px] right-[154px] w-[28px] h-[18px] text-white text-[12px] bg-black flex items-center justify-center z-10">
                <HiOutlineMail />
              </div>

              {/* Email Address */}
              <div className="email-v absolute top-[145px] left-[219px] text-white text-[12px] z-10">
                <small>{temp2Data.email || "username@example.com"}</small>
              </div>
            </div>
          </div>
        </div>
        {/* Download Button */}
        <div className="relative left-[300px] top-[-35px] z-50">
          <DownloadButton targetRef={targetRef} fileName="CardTemplate" />
        </div>
      </div>
    </>
  );
};

export default Template2;
