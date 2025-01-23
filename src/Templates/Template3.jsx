/* eslint-disable react/prop-types */
import "../style/Templates/Template3.scss";
import mountainsImage from "../assets/mountains.jpg";
import { HiOutlineMail } from "react-icons/hi";
import { HiPhone, HiMiniGlobeAsiaAustralia } from "react-icons/hi2";
import { CgWebsite } from "react-icons/cg";
import QRCode from "react-qr-code";
import { UserDataContext } from "../Context/userdatacontext";
import { useContext } from "react";

const Template3 = ({ temp3Data }) => {
  const { vCardData } = useContext(UserDataContext);

  return (
    <>
      <div className="template3">
        <div className="left">
          <div id="temp3-qr">
            <QRCode value={vCardData}  className="temp3qrcode"/>
          </div>
        </div>
        <div className="right">
          <div className="name">
            <strong>
              {temp3Data?.fname && temp3Data?.lname
                ? `${temp3Data.fname} ${temp3Data.lname}`
                : "Your Name"}
            </strong>
            <br />
            <small>{temp3Data?.designation || "Designation"}</small>
          </div>
          <div className="details">
            <div>
              <div className="temp3-h">
                <HiOutlineMail />
                &nbsp;
                {temp3Data?.email || "username@example.com"}
              </div>
              <div className="temp3-h">
                <HiPhone />
                &nbsp;
                {temp3Data?.countryCode && temp3Data?.phoneNumber
                  ? `+${temp3Data.countryCode}-${temp3Data.phoneNumber}`
                  : "+93-98xxxxxx98"}
              </div>
              {temp3Data?.website && (
                <div className="temp3-h">
                  <HiMiniGlobeAsiaAustralia />
                  &nbsp;
                  {temp3Data.website || "www.example.com"}
                </div>
              )}
              {temp3Data?.gst && (
                <div className="temp3-h">
                  <CgWebsite />
                  &nbsp;
                  {temp3Data.gst || "24AAACC3206D3ZT"}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="photo">
          <img src={mountainsImage} alt="mountainsrange photo" />
        </div>
      </div>
    </>
  );
};

export default Template3;
