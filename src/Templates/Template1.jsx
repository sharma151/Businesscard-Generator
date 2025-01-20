/* eslint-disable react/prop-types */
import "../style/Template1.css"; // Import the CSS file for styling
import { HiOutlineMail } from "react-icons/hi";
import { HiPhone, HiMiniGlobeAsiaAustralia } from "react-icons/hi2";
import { CgWebsite } from "react-icons/cg";

const Template = ({ temp1Data }) => {
  return (
    <div className="template">
      <div className="flip-inner">
        {/* Front Side */}
        <div className="front-temp temp1">
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
            {temp1Data?.website && (
              <div className="temp1-h">
                <div style={{ backgroundColor: "red" }}>
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
                {temp1Data.gst || "fdsfsfsdf"}
              </div>
            )}
          </div>
          <div id="temp1-qr">
            <div id="qrcode"></div>
            {temp1Data?.fname && (
              <img src="../assets/QR_Code.png" alt="QR Code" />
            )}
          </div>
          <div className="red-ts"></div>
          <div className="red-tb"></div>
        </div>

        {/* Back Side */}
        {/* <div className="back-temp temp1">
          <div className="temp1-bg"></div>
          <div className="temp1-name">
            <strong>See you Soon bitch!!!</strong>
            <br />
            <small>{temp1Data?.company || "Company"}</small>
          </div>
          <div id="temp1-content">
            <img src="../assets/google.png" alt="Company Logo" />
          </div>
          <div className="red-ts"></div>
          <div className="red-tb"></div>
        </div> */}
      </div>
    </div>
  );
};

export default Template;
