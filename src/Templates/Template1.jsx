/* eslint-disable react/prop-types */
import { useRef, useContext } from "react";
import QRCode from "react-qr-code";
import { HiOutlineMail } from "react-icons/hi";
import { HiPhone, HiMiniGlobeAsiaAustralia } from "react-icons/hi2";
import { CgWebsite } from "react-icons/cg";
import { FaHouseChimney } from "react-icons/fa6";
import DownloadButton from "../Components/DownloadButton";
import { UserDataContext } from "../Context/userdatacontext";

import "../style/Templates/Template1.scss"; // Import clip path styles

const Template1 = ({ temp1Data }) => {
  const cardRef = useRef(null);
  const { vCardData } = useContext(UserDataContext);

  return (
    <>
      {/* Wrapper to scale card responsively */}
      <div className="w-max ">
        <div
          className="
          transform origin-top-left
          sm:scale-[1]
          xs:scale-[0.8]
          relative z-10
           "
          style={{ maxWidth: "370px" }}
        >
          <div
            ref={cardRef}
            className="relative scale-[0.95] sm:scale-100  rounded-lg overflow-hidden h-[220px] w-[370px] border border-black template1"
          >
            {/* Overflow hidden wrapper to keep contents inside */}
            <div className="relative w-full h-full overflow-hidden">
              {/* Front Side */}
              <div className="absolute top-0 left-0 w-full h-full bg-white z-20 flex">
                {/* Background shape with clip path */}
                <div className="absolute w-full h-full -z-10 bg-black clip-template1-bg" />

                {/* Name area with clip path */}
                <div className="absolute top-[25px] left-0 w-[260px] h-[40px] text-white uppercase px-[20px] py-[5px] bg-red-600 text-xs clip-template1-name">
                  <strong>
                    {temp1Data?.fname && temp1Data?.lname
                      ? `${temp1Data.fname} ${temp1Data.lname}`
                      : "Your Name"}
                  </strong>
                  <br />
                  <small>{temp1Data?.designation || "Designation"}</small>
                </div>

                {/* Contact and other info */}
                <div className="absolute top-[93px] left-[20px] w-[250px] h-[90px] text-gray-500 text-xs space-y-1">
                  <div className="flex items-center gap-1">
                    <div className=" p-1 rounded bg-red-600 text-white font-bold inline-block">
                      <HiOutlineMail />
                    </div>
                    {temp1Data?.email || "username@example.com"}
                  </div>

                  <div className="flex items-center gap-1">
                    <div className="p-1 rounded bg-[#b60b0b] text-white font-bold inline-block">
                      <HiPhone />
                    </div>
                    {temp1Data?.countryCode && temp1Data?.phoneNumber
                      ? `+${temp1Data.countryCode}-${temp1Data.phoneNumber}`
                      : "+91-98xxxxxx98"}
                  </div>

                  <div className="flex items-center gap-1">
                    <div className=" p-1 rounded bg-red-600 text-white font-bold inline-block">
                      <FaHouseChimney />
                    </div>
                    {temp1Data?.address || "address"}
                  </div>

                  {temp1Data?.website && (
                    <div className="flex items-center gap-1">
                      <div className=" p-1 rounded bg-[#b60b0b] text-white font-bold inline-block">
                        <HiMiniGlobeAsiaAustralia />
                      </div>
                      {temp1Data.website}
                    </div>
                  )}

                  {temp1Data?.gst && (
                    <div className="flex items-center gap-1">
                      <div className=" p-1 rounded bg-red-600 text-white font-bold inline-block">
                        <CgWebsite />
                      </div>
                      {temp1Data.gst}
                    </div>
                  )}
                </div>

                {/* QR Code */}
                <div className="absolute top-[90px] right-[20px] w-[88px] h-[88px] bg-white rounded-md p-1 flex items-center justify-center">
                  <QRCode value={vCardData} size={80} />
                </div>

                {/* Decorations with clip paths */}
                <div className="absolute top-[64.5px] left-[206px] w-[86px] h-[32px] bg-[#be1e1e] clip-template1-red-ts" />
                <div className="absolute top-[75px] left-[93px] w-[200px] h-[150px] bg-[#be1e1e] clip-template1-red-tb" />
              </div>

              {/* Download button bottom right inside card */}
            </div>
          </div>
        </div>
        <div className="relative left-[300px] top-[-30px] z-50">
          <DownloadButton targetRef={cardRef} fileName="CardTemplate" />
        </div>
      </div>
    </>
  );
};

export default Template1;
