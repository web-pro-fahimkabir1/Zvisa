import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const LatestVisasSection = () => {
  const [visas, setVisas] = useState([]);
  const [loading, setLoading] = useState(true);
  // const navigate = useNavigate();

  useEffect(() => {
    // Fetch the latest visa data from the backend API
    fetch("https://zvisa-server.vercel.app/visas/latest")
      .then((response) => response.json())
      .then((data) => {
        setVisas(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching visa data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="bg-base-100 mt-5 mb-5 py-5 rounded-md">
      <h1 className="text-3xl font-bold text-center mb-10">Latest Visas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {visas.map((visa) => (
          <div
            key={visa._id}
            className="card w-full bg-base-100 border shadow-lg rounded-lg overflow-hidden"
          >
            {/* Display country image */}
            <img
              src={visa.countryImage}
              alt={visa.countryName}
              className="w-full h-48 object-cover"
            />

            {/* Card body */}
            <div className="p-6">
              {/* Display country name */}
              <h3 className="text-xl font-semibold">{visa.countryName}</h3>

              {/* Display visa type */}
              <p className="text-sm mt-2">
                <strong>Visa Type:</strong> {visa.visaType}
              </p>

              {/* Display processing time */}
              <p className="text-sm  mt-2">
                <strong>Processing Time:</strong> {visa.processingTime} days
              </p>

              {/* Display required documents */}
              <p className="text-sm  mt-2">
                <strong>Required Documents:</strong>{" "}
                {visa.requiredDocuments?.join(", ")}
              </p>

              {/* Display description */}
              <p className="text-sm mt-2">
                <strong>Description:</strong> {visa.description}
              </p>

              {/* Display age restriction */}
              <p className="text-sm mt-2">
                <strong>Age Restriction:</strong> {visa.ageRestriction}
              </p>

              {/* Display fee */}
              <p className="text-sm mt-2">
                <strong>Fee:</strong> {visa.fee} USD
              </p>

              {/* Display validity */}
              <p className="text-sm mt-2">
                <strong>Validity:</strong> {visa.validity}
              </p>

              {/* Display application method */}
              <p className="text-sm mt-2">
                <strong>Application Method:</strong> {visa.applicationMethod}
              </p>

              {/* 'See Details' button */}
              <NavLink to={`/visaDetails/${visa._id}`}>
                <button className="btn bg-[#4F709C] text-white mt-4 border-none">
                  See Details
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
      {/* see all visas */}
      <div className="w-6/12 mx-auto">
        <NavLink className="w-full flex justify-center" to={"/allVisa"}>
          <button className="btn bg-[#4F709C] text-white w-full mb-6 mt-6 border-none">
            See All Visas
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default LatestVisasSection;
