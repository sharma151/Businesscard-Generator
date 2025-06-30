/* eslint-disable react/prop-types */
import { HiPhone, HiMiniGlobeAsiaAustralia } from "react-icons/hi2";
import { UserDataContext } from "../Context/userdatacontext";
import { HiOutlineMail } from "react-icons/hi";
import { FaHouseChimney, FaBattleNet } from "react-icons/fa6";
import { useContext, useRef } from "react";
import { CgWebsite } from "react-icons/cg";
import QRCode from "react-qr-code";
import DownloadButton from "../Components/DownloadButton";

const Template4 = ({ temp4Data }) => {
  const { vCardData } = useContext(UserDataContext);
  const cardRef = useRef(null);

  return (
    <>
      <div>
        <div
          className="
          transform origin-top-left
          relative z-10
          "
          style={{ maxWidth: "370px" }}
        >
          <div
            ref={cardRef}
            className="scale-[0.95] sm:scale-100 flex w-[370px] h-[220px] bg-white border border-black rounded-lg overflow-hidden relative"
          >
            {/* Left Side */}
            <div className="flex-[1.9] bg-[#124a50] text-white px-5 pt-5 pb-3 relative [clip-path:polygon(0_0,70%_0,100%_100%,0%_100%)]">
              <div className="w-[60px] h-[60px] bg-white text-black flex justify-center items-center rounded p-[3px] absolute top-5 left-10">
                <QRCode value={vCardData} className="w-[60px] h-[60px]" />
              </div>
              <div className="flex flex-col gap-1 text-xs absolute top-[90px] left-[15px]">
                <div className="flex items-center gap-1">
                  <HiOutlineMail />
                  {temp4Data?.email || "username@example.com"}
                </div>
                <div className="flex items-center gap-1">
                  <HiPhone />
                  {temp4Data?.countryCode && temp4Data?.phoneNumber
                    ? `+${temp4Data.countryCode}-${temp4Data.phoneNumber}`
                    : "+94-98xxxxxx98"}
                </div>
                <div className="flex items-center gap-1">
                  <FaHouseChimney />
                  {temp4Data.address || "address"}
                </div>
                {temp4Data?.website && (
                  <div className="flex items-center gap-1">
                    <HiMiniGlobeAsiaAustralia />
                    {temp4Data.website}
                  </div>
                )}
                {temp4Data?.gst && (
                  <div className="flex items-center gap-1">
                    <CgWebsite />
                    {temp4Data.gst}
                  </div>
                )}
              </div>
            </div>

            {/* Right Side */}
            <div className="flex-1 relative">
              <div className="absolute top-10 left-[-37px] text-[18px] font-sans leading-[15px]">
                <strong>
                  {temp4Data?.fname && temp4Data?.lname
                    ? `${temp4Data.fname} ${temp4Data.lname}`
                    : "Your Name"}
                </strong>
                <br />
                <small>{temp4Data?.designation || "Designation"}</small>
              </div>
              <FaBattleNet className="text-[50px] text-[#124a50] absolute top-[130px] left-[20px]" />
            </div>
          </div>
        </div>
        {/* Download Button */}
        <div className="relative left-[300px] top-[-35px] z-50">
          <DownloadButton targetRef={cardRef} fileName="CardTemplate" />
        </div>
      </div>
    </>
  );
};

export default Template4;
