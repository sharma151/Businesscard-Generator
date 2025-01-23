/* eslint-disable react/prop-types */
import "../style/Templates/Template4.scss";
import { UserDataContext } from "../Context/userdatacontext";
import { useContext } from "react";
import QRCode from "react-qr-code";
const Template4 = ({ temp4Data }) => {
  const { vCardData } = useContext(UserDataContext);
  return (
    <>
      <div className="template4">
        <div className="card-left">
          <div className="qr-code">
            <QRCode value={vCardData} className="temp4qrcode"/>
          </div>
          <ul className="contact-info">
            <li>{temp4Data.website || "www.example.com"}</li>
            <li>
              {" "}
              {temp4Data?.countryCode && temp4Data?.phoneNumber
                ? `+${temp4Data.countryCode}-${temp4Data.phoneNumber}`
                : "+977-98xxxxxx98"}
            </li>
            <li> {temp4Data?.email || "username@example.com"}</li>
          </ul>
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
          <div className="logo">A</div>
        </div>
      </div>
    </>
  );
};

export default Template4;
