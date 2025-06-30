/* eslint-disable react/prop-types */
import logo from "../assets/carpenterlogo.jpg";
import { HiOutlineMail } from "react-icons/hi";
import { HiPhone, HiMiniGlobeAsiaAustralia } from "react-icons/hi2";
import { FaHouseChimney } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import QRCode from "react-qr-code";
import { UserDataContext } from "../Context/userdatacontext";
import { useContext, useRef } from "react";
import DownloadButton from "../Components/DownloadButton";

const Template3 = ({ temp3Data }) => {
  const { vCardData } = useContext(UserDataContext);
  const targetRef = useRef(null);

  return (
    <>
      <div className="w-max relative">
        <div
          className="
          transform origin-top-left
          relative z-10
          "
          style={{ maxWidth: "370px" }}
        >
          <div
            ref={targetRef}
            className="relative flex w-[370px] h-[220px] rounded-lg scale-[0.95] sm:scale-100  overflow-hidden border border-black"
          >
            {/* Left Side with QR */}
            <div className="w-1/3 bg-[#98c5c8] relative">
              <div className="absolute top-4 left-7 bg-white p-1.5 rounded">
                <QRCode value={vCardData} className="h-[45px] w-[45px]" />
              </div>
            </div>

            {/* Right Side with Info */}
            <div className="w-2/3 bg-[#333536] text-white relative px-3">
              <div className="absolute top-[50px] left-[50px] font-sans">
                <strong>
                  {temp3Data?.fname && temp3Data?.lname
                    ? `${temp3Data.fname} ${temp3Data.lname}`
                    : "Your Name"}
                </strong>
                <br />
                <small>{temp3Data?.designation || "Designation"}</small>
              </div>

              <div className="absolute top-[110px] left-[50px] text-xs space-y-1">
                <div className="flex items-center">
                  <HiOutlineMail className="mr-1" />
                  {temp3Data?.email || "username@example.com"}
                </div>
                <div className="flex items-center">
                  <HiPhone className="mr-1" />
                  {temp3Data?.countryCode && temp3Data?.phoneNumber
                    ? `+${temp3Data.countryCode}-${temp3Data.phoneNumber}`
                    : "+93-98xxxxxx98"}
                </div>
                <div className="flex items-center">
                  <FaHouseChimney className="mr-1" />
                  {temp3Data.address || "address"}
                </div>
                {temp3Data?.website && (
                  <div className="flex items-center">
                    <HiMiniGlobeAsiaAustralia className="mr-1" />
                    {temp3Data.website}
                  </div>
                )}
                {temp3Data?.gst && (
                  <div className="flex items-center">
                    <CgWebsite className="mr-1" />
                    {temp3Data.gst}
                  </div>
                )}
              </div>
            </div>

            {/* Profile Image */}
            <div className="absolute top-[70px] left-[calc(33%-55px)] h-[100px] w-[100px] rounded-full border-2 border-white flex justify-center items-center bg-white">
              <img
                src={logo}
                alt="profile"
                className="h-[90%] w-[90%] rounded-full border border-white object-cover"
              />
            </div>
          </div>
        </div>
        {/* Download Button */}
        <div className="relative left-[40px] top-[-35px] z-50">
          <DownloadButton targetRef={targetRef} fileName="CardTemplate" />
        </div>
      </div>
    </>
  );
};

export default Template3;
