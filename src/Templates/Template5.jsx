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
      <div ref={cardRef} className="template5">
        <div className="card-left">
          <div className="upper"></div>
          <div className="lower"></div>
        </div>
        <div className="card-right">
          <div className="name">
            <strong>
              {temp5Data?.fname && temp5Data?.lname
                ? `${temp5Data.fname} ${temp5Data.lname}`
                : "Your Name"}
            </strong>
            <br />
            <small>{temp5Data?.designation || "Designation"}</small>
          </div>
          <div className="temp5-details">
            <div className="temp5-h">
              <HiOutlineMail /> {temp5Data?.email || "username@example.com"}
            </div>
            <div className="temp5-h">
              <HiPhone />
              {temp5Data?.countryCode && temp5Data?.phoneNumber
                ? `+${temp5Data.countryCode}-${temp5Data.phoneNumber}`
                : "+95-98xxxxxx98"}
            </div>
            <div className="temp5-h">
              <div>
                <FaHouseChimney />
              </div>
              &nbsp;
              {temp5Data.address || "address"}
            </div>
            {temp5Data?.website && (
              <div className="temp5-h">
                <HiMiniGlobeAsiaAustralia />{" "}
                {temp5Data.website || "www.example.com"}
              </div>
            )}
            {temp5Data?.gst && (
              <div className="temp5-h">
                <CgWebsite /> {temp5Data.gst || "25AAACC5206D5ZT"}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="template5-dbtn">
        <DownloadButton targetRef={cardRef} fileName="CardTemplate" />
      </div>
    </>
  );
};

export default Template5;
