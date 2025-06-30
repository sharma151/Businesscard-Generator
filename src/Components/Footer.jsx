import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full px-4 py-3 border-t flex flex-col md:flex-row items-center justify-between bg-white text-sm text-gray-700">
      <p className="text-center md:text-left">
        Designed and developed by{" "}
        <span className="font-semibold">Saurav Sharma</span>
      </p>
      <div className="flex gap-4 mt-2 md:mt-0">
        <a
          href="https://github.com/sharma151" // 🔁 Replace with your actual GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/saurav0402/" // 🔁 Replace with your actual LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
