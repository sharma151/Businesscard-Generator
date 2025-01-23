/* eslint-disable react/prop-types */
import { useState, createContext } from "react";
// import QRCode from "react-qr-code";
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

  const vCardData = [
    "BEGIN:VCARD",
    "VERSION:4.0",
    `FN:${userData?.fname || "First Name"} ${userData?.lname || "Last Name"}`,
    `ORG:${userData?.company || "Company"}`,
    `TITLE:${userData?.designation || "Designation"}`,
    `EMAIL:${userData?.email || "username@example.com"}`,
    `TEL;TYPE=work,voice:${
      userData?.countryCode && userData?.phoneNumber
        ? `+${userData.countryCode}${userData.phoneNumber}`
        : "+939876543230"
    }`,
    `URL:${userData?.website || "https://www.example.com"}`,
    "END:VCARD",
  ].join("\n");

  return (
    <UserDataContext.Provider value={{ userData, setUserData, vCardData }}>
      {children}
    </UserDataContext.Provider>
  );
};
