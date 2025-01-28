/* eslint-disable react/prop-types */
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import "../style/Components/Downloadbtn.scss";
import { BiSolidFilePng, BiSolidFilePdf } from "react-icons/bi";

const DownloadButton = ({ targetRef, fileName, className }) => {
  const handleDownloadPNG = async () => {
    if (!targetRef?.current) return;
    try {
      const dataUrl = await toPng(targetRef.current, {
        pixelRatio: 4, // Increase pixel ratio for better quality
        
      });
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `${fileName || "download"}.png`;
      link.click();
    } catch (error) {
      console.error("Error downloading PNG:", error);
    }
  };

  const handleDownloadPDF = async () => {
    if (!targetRef?.current) return;
    try {
      const dataUrl = await toPng(targetRef.current, { pixelRatio: 4 });
      const pdf = new jsPDF();

      // Getting image properties to maintain aspect ratio
      const imgProps = pdf.getImageProperties(dataUrl);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      const margin = 10;
      const scaleFactor = 1.05; // Optional, adjust scale if content is still cut off

      // Increase the margin to ensure the content isn't cut off
      pdf.addImage(
        dataUrl,
        "PNG",
        margin,
        margin,
        pdfWidth - margin * 2,
        pdfHeight * scaleFactor - margin * 2 // Adjust height scaling
      );

      pdf.save(`${fileName || "download"}.pdf`);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return (
    <div className={`download-btn ${className || ""}`}>
      <button onClick={handleDownloadPNG} className="btn">
        <BiSolidFilePng />
      </button>
      <button onClick={handleDownloadPDF} className="btn">
        <BiSolidFilePdf />
      </button>
    </div>
  );
};

export default DownloadButton;
