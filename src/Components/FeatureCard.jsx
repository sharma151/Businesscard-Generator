// src/components/FeatureCard.jsx
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const FeatureCard = ({ title, description, link, icon: Icon, className }) => {
  return (
    <div className={`rounded-xl shadow-md p-6 bg-white ${className}`}>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={link}
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-md hover:opacity-90 transition"
      >
        <Icon size={20} />
        <span>{title}</span>
      </Link>
    </div>
  );
};

export default FeatureCard;
