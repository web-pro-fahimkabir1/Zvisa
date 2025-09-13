import { NavLink } from "react-router-dom";

// VisaCard component to display visa details for each country
const VisaCard = ({ visa, visas, setVisas }) => {
  // Destructure the visa properties from the 'visa' object
  const { _id, countryName, countryImage, visaType, applicationMethod } = visa;

  return (
    <div className="card w-full bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Display country image */}
      <img
        src={countryImage}
        alt={countryName}
        className="w-full h-48 object-cover"
      />

      {/* Card body */}
      <div className="p-6">
        {/* Display country name */}
        <h3 className="text-xl font-semibold text-gray-800">{countryName}</h3>

        {/* Display visa type */}
        <p className="text-sm text-gray-600 mt-2">
          <strong>Visa Type:</strong> {visaType}
        </p>

        {/* Display application method */}
        <p className="text-sm text-gray-600 mt-2">
          <strong>Application Method:</strong> {applicationMethod}
        </p>

        {/* 'See Details' button */}
        <NavLink to={`/visaDetails/${_id}`}>
          <button className="btn bg-[#4F709C] text-white mt-4">
            See Details
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default VisaCard;
