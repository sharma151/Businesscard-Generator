import "../style/Pages/Qrcode.scss";
import QRCode from "react-qr-code";
import { useContext, useState } from "react";
import { UserDataContext } from "../Context/userdatacontext";

const Qrcode = () => {
  const { userData } = useContext(UserDataContext);
  const [data, setData] = useState(userData);

  // Convert user details to JSON string for QR code
  const qrData = JSON.stringify(userData);
  console.log("qrcode", data);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        margin: "2rem",
      }}
    >
      <h1>QR Code Generator</h1>
      <div
        style={{ margin: "2rem auto", maxWidth: "400px", textAlign: "left" }}
      >
        <h2>User Details:</h2>
        <p>
          <strong>First Name:</strong> {userData.fname}
        </p>
        <p>
          <strong>Last Name:</strong> {userData.lname}
        </p>
        <p>
          <strong>Designation:</strong> {userData.designation}
        </p>
        <p>
          <strong>Phone:</strong> {userData.countryCode} {userData.phoneNumber}
        </p>
        <p>
          <strong>Website:</strong> {userData.website}
        </p>
        <p>
          <strong>Company:</strong> {userData.company}
        </p>
        <p>
          <strong>Email:</strong> {userData.email}
        </p>
        <p>
          <strong>GST Number:</strong> {userData.gstNumber || "N/A"}
        </p>
      </div>
      <div>
        <h2>Your QR Code</h2>
        <QRCode value={qrData} size={200} />
      </div>
    </div>
  );
};

export default Qrcode;
