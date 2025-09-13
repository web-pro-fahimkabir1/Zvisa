import React, { useState } from "react";
import Swal from "sweetalert2";
import Modal from "../Modal/Modal";

const MyAddedVisasCard = ({ myAddedvisa, onDelete }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    ...myAddedvisa,
    requiredDocuments: new Set(myAddedvisa.requiredDocuments || []), // Initialize as Set for easy management
  });

  const {
    _id,
    countryName,
    countryImage,
    visaType,
    processingTime,
    validity,
    applicationMethod,
    fee,
    ageRestriction,
    description,
  } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //   ====================================>
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedDocuments = new Set(prev.requiredDocuments);
      if (checked) {
        updatedDocuments.add(value);
      } else {
        updatedDocuments.delete(value);
      }
      return { ...prev, requiredDocuments: updatedDocuments };
    });
  };

  //   **************************************
  const handleUpdateVisa = (e) => {
    e.preventDefault();

    const updatedData = {
      ...formData,
      requiredDocuments: Array.from(formData.requiredDocuments),
    };

    // console.log(updatedData);

    fetch(`https://zvisa-server.vercel.app/myAddedvisa/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated!",
            text: "Visa updated successfully.",
            icon: "success",
          });
          setShowModal(false); // Close modal after update
        }
      });
  };

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>delete
  const handleCancel = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://zvisa-server.vercel.app/myAddedvisas/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Added Visa has been deleted.",
                icon: "success",
              });
              onDelete(_id); // Remove the card dynamically
            }
          });
      }
    });
  };

  return (
    <div className="border border-gray-300 shadow-md rounded-lg p-4 md:p-6 mb-4 bg-white">
      {/* Visa details */}
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={countryImage}
          alt={countryName}
          className="w-24 h-24 object-cover rounded-full border border-gray-200 mb-4 md:mb-0 md:mr-6"
        />
        <div className="flex-grow text-center md:text-left">
          <h3 className="text-lg font-semibold">{countryName}</h3>
          <p className="text-sm text-gray-500">{visaType}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 text-sm text-gray-700">
        <p>
          <span className="font-medium">Processing Time:</span> {processingTime}{" "}
          days
        </p>
        <p>
          <span className="font-medium">Fee:</span> ${fee}
        </p>
        <p>
          <span className="font-medium">Validity:</span> {validity}
        </p>
        <p>
          <span className="font-medium">Application Method:</span>{" "}
          {applicationMethod}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col space-y-2 mt-4">
        <button
          className="btn bg-[#4F709C] text-white py-2 hover:bg-sky-950 transition"
          onClick={() => setShowModal(true)}
        >
          Update
        </button>
        <button
          className="btn bg-red-500 text-white py-2 hover:bg-red-700 transition"
          onClick={handleCancel}
        >
          Delete
        </button>
      </div>

      {/* Modal for Update Form */}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Update Visa"
      >
        <form onSubmit={handleUpdateVisa} className="space-y-4">
          {/* Country Name */}
          <div className="form-control">
            <label className="label font-medium">Country Name</label>
            <input
              type="text"
              name="countryName"
              value={countryName}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* country image */}
          <div className="form-control pb-5">
            <label className="label">Country Image</label>
            <input
              type="text"
              name="countryImage"
              value={countryImage}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Required Documents */}
          <div className="form-control">
            <label className="label font-medium">Required Documents</label>
            <div className="space-y-2">
              {[
                "Valid passport",
                "Visa application form",
                "Recent passport-sized photograph",
                "Proof of residence",
              ].map((doc) => (
                <label key={doc} className="flex items-center">
                  <input
                    type="checkbox"
                    name="requiredDocuments"
                    value={doc}
                    checked={formData.requiredDocuments.has(doc)}
                    onChange={handleCheckboxChange}
                  />
                  <span className="ml-2">{doc}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Fee */}
          <div className="form-control">
            <label className="label font-medium">Fee</label>
            <input
              type="number"
              name="fee"
              value={fee}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          {/* processing time */}
          <div className="form-control pb-5">
            <label className="label">Processing Time</label>
            <input
              type="text"
              name="processingTime"
              value={processingTime}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Application Method */}
          <div className="form-control">
            <label className="label font-medium">Application Method</label>
            <input
              type="text"
              name="applicationMethod"
              value={applicationMethod}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Age Restriction */}
          <div className="form-control pb-5">
            <label className="label">
              <span className="label-text">Age Restriction</span>
            </label>
            <input
              type="number"
              name="ageRestriction"
              value={ageRestriction}
              onChange={handleInputChange}
              className="input input-bordered w-full p-3"
              required
            />
          </div>

          {/* Visa Types */}
          <div className="form-control pb-5">
            <label className="label">Visa Type</label>
            <select
              name="visaType"
              value={visaType}
              onChange={handleInputChange}
              className="select select-bordered w-full"
              required
            >
              <option value="Tourist visa">Tourist visa</option>
              <option value="Student visa">Student visa</option>
              <option value="Official visa">Official visa</option>
              <option value="Business visa">Business visa</option>
              <option value="Transit visa">Transit visa</option>
            </select>
          </div>

          {/* Validity */}
          <div className="form-control">
            <label className="label font-medium">Validity</label>
            <input
              type="date"
              name="validity"
              value={validity}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Description */}
          <div className="form-control pb-5">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              value={description}
              onChange={handleInputChange}
              className="textarea textarea-bordered w-full p-3"
              required
            />
          </div>

          {/* Save Changes Button */}
          <button
            type="submit"
            className="btn bg-green-500 text-white py-2 hover:bg-green-700 w-full"
          >
            Submit Update
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default MyAddedVisasCard;
