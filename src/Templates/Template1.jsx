/* eslint-disable react/prop-types */
import "../style/Templates/Template1.scss";
import { HiOutlineMail } from "react-icons/hi";
import { HiPhone, HiMiniGlobeAsiaAustralia } from "react-icons/hi2";
import { CgWebsite } from "react-icons/cg";
import { FaHouseChimney } from "react-icons/fa6";
import QRCode from "react-qr-code";
import DownloadButton from "../Components/DownloadButton";
import { useRef } from "react";
import { UserDataContext } from "../Context/userdatacontext";
import { useContext } from "react";

const Template = ({ temp1Data }) => {
  const cardRef = useRef(null);
  const { vCardData } = useContext(UserDataContext);

  return (
    <>
      <div ref={cardRef} className="template1">
        <div className="flip-inner">
          {/* Front Side */}
          <div className="front-temp ">
            <div className="temp1-bg"></div>
            <div className="temp1-name">
              <strong>
                {temp1Data?.fname && temp1Data?.lname
                  ? `${temp1Data.fname} ${temp1Data.lname}`
                  : "Your Name"}
              </strong>
              <br />
              <small>{temp1Data?.designation || "Designation"}</small>
            </div>
            <div className="temp1-content">
              <div className="temp1-h">
                <div style={{ backgroundColor: "red" }}>
                  <HiOutlineMail />
                </div>
                &nbsp;
                {temp1Data?.email || "username@example.com"}
              </div>
              <div className="temp1-h">
                <div style={{ backgroundColor: "#b60b0b" }}>
                  <HiPhone />
                </div>
                &nbsp;
                {temp1Data?.countryCode && temp1Data?.phoneNumber
                  ? `+${temp1Data.countryCode}-${temp1Data.phoneNumber}`
                  : "+91-98xxxxxx98"}
              </div>
              <div className="temp1-h">
                <div style={{ backgroundColor: "red" }}>
                  <FaHouseChimney />
                </div>
                &nbsp;
                {temp1Data.address || "address"}
              </div>
              {temp1Data?.website && (
                <div className="temp1-h">
                  <div style={{ backgroundColor: "#b60b0b" }}>
                    <HiMiniGlobeAsiaAustralia />
                  </div>
                  &nbsp;
                  {temp1Data.website || "www.example.com"}
                </div>
              )}
              {temp1Data?.gst && (
                <div className="temp1-h">
                  <div style={{ backgroundColor: "red" }}>
                    <CgWebsite />
                  </div>
                  &nbsp;
                  {temp1Data.gst || "24AAACC1206D1ZT"}
                </div>
              )}
            </div>
            <div id="temp1-qr">
              <QRCode value={vCardData} size={80} />
            </div>
            <div className="red-ts"></div>
            <div className="red-tb"></div>
          </div>
        </div>
      </div>
      <div className="template1-dbtn">
        <DownloadButton targetRef={cardRef} fileName="CardTemplate" />
      </div>
    </>
  );
};

export default Template;
