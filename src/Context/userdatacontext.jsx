/* eslint-disable react/prop-types */
import { useState, createContext } from "react";
import QRCode from "react-qr-code";
// eslint-disable-next-line react-refresh/only-export-components
export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    designation: "",
    phoneNumber: "",
    countryCode: "",
    website: "",
    company: "",
    email: "",
  });

  const [qrCode, setQrCode] = useState("");

  // Function to generate QR Code
  const generateQrCode = (data) => {
    QRCode.toDataURL(data, (err, url) => {
      if (err) console.error(err);
      setQrCode(url);
    });
  };

  console.log("context userdata here", qrCode);
  return (
    <UserDataContext.Provider
      value={{ userData, setUserData, qrCode, generateQrCode }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
