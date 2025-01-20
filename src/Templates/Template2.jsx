/* eslint-disable react/prop-types */
import "../style/Template2.css";

import { HiPhone, HiMiniGlobeAsiaAustralia } from "react-icons/hi2";

const Template2 = ({ temp2Data }) => {
  return (
    <div className="template">
      <div className="flip-inner">
        <div className="front-temp temp2">
          <div className="temp2-bg"></div>
          <div className="temp2-web">
            <small>{temp2Data?.website || "www.yourwebsite.com"}</small>
          </div>
          <div className="company-logo">
            <i className="fab fa-joomla"></i>
          </div>
          <div className="temp2-content">
            <p>
              {temp2Data.fname && temp2Data.lname
                ? `${temp2Data.fname} ${temp2Data.lname}`
                : "Saurav sharma"}
            </p>
            <small>{temp2Data.designation || "Designation"}</small>
          </div>
          <div className="phone-h">
            <HiPhone />
          </div>
          <div className="phone-v">
            <small>
              {temp2Data.countryCode && temp2Data.phoneNumber
                ? `+${temp2Data.countryCode} - ${temp2Data.phoneNumber}`
                : "+91-98xxxxxx98"}
            </small>
          </div>
          <div className="email-h">
            <HiMiniGlobeAsiaAustralia />
          </div>
          <div className="email-v">
            <small>{temp2Data.website || "www.example.com"}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
