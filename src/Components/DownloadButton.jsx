/* eslint-disable react/prop-types */
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import "../style/Components/Downloadbtn.scss";
import { BiSolidFilePng, BiSolidFilePdf } from "react-icons/bi";

const DownloadButton = ({ selectedRefs, fileName, className }) => {
  const handleDownloadPNG = async () => {
    if (!selectedRefs || selectedRefs.length === 0) return;

    try {
      for (const ref of selectedRefs) {
        if (!ref?.current) continue;

        const dataUrl = await toPng(ref.current, { pixelRatio: 4 });
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `${fileName || "download"}.png`;
        link.click();
      }
    } catch (error) {
      console.error("Error downloading PNG:", error);
    }
  };

  const handleDownloadPDF = async () => {
    if (!selectedRefs || selectedRefs.length === 0) return;

    try {
      for (const ref of selectedRefs) {
        if (!ref?.current) continue;

        const dataUrl = await toPng(ref.current, { pixelRatio: 4 });
        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(dataUrl);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        const margin = 10;
        const scaleFactor = 1.05;

        pdf.addImage(
          dataUrl,
          "PNG",
          margin,
          margin,
          pdfWidth - margin * 2,
          pdfHeight * scaleFactor - margin * 2
        );

        pdf.save(`${fileName || "download"}.pdf`);
      }
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
