/* eslint-disable react/prop-types */
import { HiPhone, HiMiniGlobeAsiaAustralia } from "react-icons/hi2";
import "../style/Templates/Template5.scss";
import { HiOutlineMail } from "react-icons/hi";
import { CgWebsite } from "react-icons/cg";
import { FaHouseChimney } from "react-icons/fa6";
import DownloadButton from "../Components/DownloadButton";
import { useRef } from "react";

const Template5 = ({ temp5Data }) => {
  const cardRef = useRef(null);

  return (
    <>
      <div>
        <div
          className="
          transform origin-top-left
          relative z-10
          "
          // style={{ maxWidth: "370px" }}
        >
          <div
            ref={cardRef}
            className="template5 scale-[0.95] sm:scale-100  w-[370px] h-[220px] flex rounded-[10px] overflow-hidden shadow-md bg-[#b78f5b] relative flex-wrap border border-black"
          >
            {/* Left side design layers */}
            <div className="card-left relative flex-shrink-0 min-w-[150px] w-[60%] bg-[#b78f5b]">
              <div className="upper absolute top-0 left-0 w-full h-[78%]" />
              <div className="lower absolute bottom-0 left-0 w-full h-[72%]" />
            </div>

            {/* Right side info */}
            <div className="card-right flex-1 relative flex flex-col justify-start px-4 pt-8 pb-4 z-50">
              <div className="name absolute top-11 left-[-30px] text-[18px] leading-[15px] text-[#062538]  font-semibold ">
                <strong>
                  {temp5Data?.fname && temp5Data?.lname
                    ? `${temp5Data.fname} ${temp5Data.lname}`
                    : "Your Name"}
                </strong>
                <br />
                <small className="text-sm font-normal">
                  {temp5Data?.designation || "Designation"}
                </small>
              </div>

              <div className=" text-[#062538] pt-5 pb-3 font-normal ">
                <div className="flex flex-col gap-1 text-[0.8rem] absolute top-[95px] left-[-70px] z-50">
                  <div className="flex items-center gap-1">
                    <HiOutlineMail />
                    {temp5Data?.email || "username@example.com"}
                  </div>
                  <div className="flex items-center gap-1">
                    <HiPhone />
                    {temp5Data?.countryCode && temp5Data?.phoneNumber
                      ? `+${temp5Data.countryCode}-${temp5Data.phoneNumber}`
                      : "+94-98xxxxxx98"}
                  </div>
                  <div className="flex items-center gap-1">
                    <FaHouseChimney />
                    {temp5Data.address || "address"}
                  </div>
                  {temp5Data?.website && (
                    <div className="flex items-center gap-1">
                      <HiMiniGlobeAsiaAustralia />
                      {temp5Data.website}
                    </div>
                  )}
                  {temp5Data?.gst && (
                    <div className="flex items-center gap-1">
                      <CgWebsite />
                      {temp5Data.gst}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download button */}
        <div className="relative left-[10px] top-[-35px] z-50">
          <DownloadButton targetRef={cardRef} fileName="CardTemplate" />
        </div>
      </div>
    </>
  );
};

export default Template5;
