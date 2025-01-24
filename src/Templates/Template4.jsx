/* eslint-disable react/prop-types */
import "../style/Templates/Template4.scss";
import { UserDataContext } from "../Context/userdatacontext";
import { useContext } from "react";
import QRCode from "react-qr-code";
import { FaBattleNet } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { HiPhone, HiMiniGlobeAsiaAustralia } from "react-icons/hi2";
import { CgWebsite } from "react-icons/cg";
const Template4 = ({ temp4Data }) => {
  const { vCardData } = useContext(UserDataContext);
  return (
    <>
      <div className="template4">
        <div className="card-left">
          <div className="qr-code">
            <QRCode value={vCardData} className="temp4qrcode" />
          </div>
          <div className="temp4-details">
            <div className="temp4-h">
              <HiOutlineMail />
              &nbsp;
              {temp4Data?.email || "username@example.com"}
            </div>
            <div className="temp4-h">
              <HiPhone />
              &nbsp;
              {temp4Data?.countryCode && temp4Data?.phoneNumber
                ? `+${temp4Data.countryCode}-${temp4Data.phoneNumber}`
                : "+94-98xxxxxx98"}
            </div>
            {temp4Data?.website && (
              <div className="temp4-h">
                <HiMiniGlobeAsiaAustralia />
                &nbsp;
                {temp4Data.website || "www.example.com"}
              </div>
            )}
            {temp4Data?.gst && (
              <div className="temp4-h">
                <CgWebsite />
                &nbsp;
                {temp4Data.gst || "24AAACC4206D4ZT"}
              </div>
            )}
          </div>
        </div>
        <div className="card-right">
          <div className="name">
            <strong>
              {temp4Data?.fname && temp4Data?.lname
                ? `${temp4Data.fname} ${temp4Data.lname}`
                : "Your Name"}
            </strong>
            <br />
            <small>{temp4Data?.designation || "Designation"}</small>
          </div>
          <FaBattleNet  className="logo"/>
        </div>
      </div>
    </>
  );
};

export default Template4;
