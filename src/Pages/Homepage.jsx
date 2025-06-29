// src/pages/HomePage.jsx
import { BsQrCodeScan } from "react-icons/bs";
import { BiBarcode } from "react-icons/bi";
import { TiBusinessCard } from "react-icons/ti";
import FeatureCard from "../Components/FeatureCard"; // adjust path as needed

const HomePage = () => {
  const features = [
    {
      title: "QR Code Generator",
      description: "Easily generate QR codes for URLs, text, and more!",
      link: "/qrcode",
      icon: BsQrCodeScan,
    },
    {
      title: "Barcode Generator",
      description: "Create barcodes in various formats with ease.",
      link: "/Barcode",
      icon: BiBarcode,
    },
    {
      title: "Business Card Generator",
      description: "Design and download personalized business cards.",
      link: "/BusinessCard",
      icon: TiBusinessCard,
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-blue-100 py-5 px-4">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-800 drop-shadow">
        Welcome to Generator Hub
      </h1>
      <p className="text-center text-lg text-gray-600 mb-10">
        Create QR Codes, Barcodes, and Business Cards in just a few clicks!
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
