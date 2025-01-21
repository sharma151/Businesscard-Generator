/* eslint-disable react/prop-types */
import "../style/Templates/Template2.scss";
import DownloadButton from "../Components/DownloadButton";

import { HiOutlineMail } from "react-icons/hi";
import { TfiJoomla } from "react-icons/tfi";
import { useRef } from "react";
import { HiPhone } from "react-icons/hi2";

const Template2 = ({ temp2Data }) => {
  const targetRef = useRef(null);

  return (
    <>
      <div ref={targetRef} className="template2">
        <div className="wrapper">
          <div className="flip-inner">
            <div className="front-temp temp2">
              <div className="temp2-bg"></div>
              <div className="temp2-web">
                <small>{temp2Data?.website || "www.yourwebsite.com"}</small>
              </div>
              <div className="company-logo">
                <TfiJoomla />
              </div>
              <div className="temp2-content">
                <p>
                  {temp2Data.fname && temp2Data.lname
                    ? `${temp2Data.fname} ${temp2Data.lname}`
                    : "Your Name"}
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
                <HiOutlineMail />
              </div>
              <div className="email-v">
                <small>{temp2Data.email || "www.example.com"}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="template2-dbtn">
        <DownloadButton targetRef={targetRef} fileName="CardTemplate" />
      </div>
    </>
  );
};

export default Template2;
