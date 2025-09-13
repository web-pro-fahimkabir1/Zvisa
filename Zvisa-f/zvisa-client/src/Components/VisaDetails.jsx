import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  FaPassport,
  FaMoneyBillWave,
  FaClock,
  FaRegCalendarAlt,
  FaFlag,
} from "react-icons/fa";
import Modal from "../Modal/Modal";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const VisaDetails = () => {
  // use context to get login user
  const { user } = useContext(AuthContext);

  const email = user?.email;

  const visa = useLoaderData();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    email: email,
    firstName: "",
    lastName: "",
    appliedDate: new Date().toISOString().split("T")[0],
    fee: visa.fee, // Pre-fill the fee from visa details
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const dataToSend = { ...formData, visaDetails: visa };
    // console.log(dataToSend);

    // Send newVisa data to server
    fetch("https://zvisa-server.vercel.app/userVisas", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "UserVisa Added Successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
          setShowModal(false);
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Visa Details */}
      <div className="bg-white shadow-xl rounded-lg p-8 space-y-6 max-w-4xl mx-auto border border-gray-200">
        {/* Header Section */}
        <div className="flex items-center space-x-6">
          <img
            src={visa.countryImage}
            alt={visa.countryName}
            className="w-20 h-20 rounded-full object-cover border border-gray-300 shadow-sm"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {visa.countryName}
            </h1>
            <p className="text-gray-500 text-lg flex items-center space-x-2">
              <FaFlag className="text-gray-400" />
              <span>{visa.visaType}</span>
            </p>
          </div>
        </div>

        {/* Age Restriction Section (Moved Here) */}
        <div className="text-center bg-indigo-50 p-4 rounded-lg shadow-sm border border-indigo-200">
          <h3 className="text-sm font-medium text-indigo-700">
            Age Restriction
          </h3>
          <p className="text-2xl font-bold text-indigo-600">
            {visa.ageRestriction}
          </p>
        </div>

        {/* Description Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Visa Details</h2>
          <p className="text-gray-600 text-base leading-6">
            {visa.description}
          </p>
        </div>

        {/* Visa Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-gray-100 pt-6">
          <div className="flex items-center space-x-3">
            <FaPassport className="text-indigo-600 text-2xl" />
            <div>
              <h3 className="text-sm font-medium text-gray-700">
                Application Method
              </h3>
              <p className="text-gray-800 text-base">
                {visa.applicationMethod}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <FaMoneyBillWave className="text-green-500 text-2xl" />
            <div>
              <h3 className="text-sm font-medium text-gray-700">Visa Fee</h3>
              <p className="text-green-600 text-lg font-semibold">
                ${visa.fee}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <FaClock className="text-orange-400 text-2xl" />
            <div>
              <h3 className="text-sm font-medium text-gray-700">
                Processing Time
              </h3>
              <p className="text-gray-800 text-base">
                {visa.processingTime} days
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <FaRegCalendarAlt className="text-blue-500 text-2xl" />
            <div>
              <h3 className="text-sm font-medium text-gray-700">
                Visa Validity
              </h3>
              <p className="text-gray-800 text-base">{visa.validity}</p>
            </div>
          </div>
        </div>

        {/* Required Documents Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            Required Documents
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 text-base">
            {visa.requiredDocuments.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <button
          className="btn bg-[#4F709C] text-white w-full mb-6 mt-6"
          onClick={() => setShowModal(true)}
        >
          Apply for the Visa
        </button>
      </div>

      {/* Modal */}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Visa Application"
      >
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              value={formData.email}
              onChange={handleInputChange}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              className="input w-full"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="input w-full"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Applied Date</label>
            <input
              type="text"
              name="appliedDate"
              className="input w-full bg-gray-100"
              value={formData.appliedDate}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Fee</label>
            <input
              type="text"
              name="fee"
              className="input w-full bg-gray-100"
              value={formData.fee}
              readOnly
            />
          </div>
          <button
            type="button"
            className="btn bg-[#4F709C] text-white w-full"
            onClick={handleSubmit}
          >
            Apply
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default VisaDetails;
