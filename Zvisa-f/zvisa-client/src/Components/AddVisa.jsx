// import Swal from "sweetalert2";

import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const AddVisa = () => {
  // use context to get login user
  const { user } = useContext(AuthContext);

  const email = user?.email;

  const handleAddVisa = (e) => {
    e.preventDefault();
    const form = e.target;
    const countryName = form.countryName.value;
    const countryImage = form.countryImage.value;
    const visaType = form.visaType.value;
    const processingTime = form.processingTime.value;
    const requiredDocuments = Array.from(form.requiredDocuments)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);
    const description = form.description.value;
    const ageRestriction = form.ageRestriction.value;
    const fee = form.fee.value;
    const validity = form.validity.value;
    const applicationMethod = form.applicationMethod.value;

    const newVisa = {
      countryName,
      countryImage,
      visaType,
      processingTime,
      requiredDocuments,
      description,
      ageRestriction,
      fee,
      validity,
      applicationMethod,
      email,
    };

    // console.log(newVisa);

    // Send newVisa data to server
    fetch("https://zvisa-server.vercel.app/visas", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newVisa),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Visa Added Successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
          // Reset form after submission
          form.reset();
        }
      });
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <div className="bg-[#F4F3F0] py-6 px-6 rounded-md">
        <p className="flex justify-center text-2xl font-bold text-gray-700 mb-4">
          Add New Visa Information
        </p>
        <form onSubmit={handleAddVisa}>
          {/* Country Image and Name */}
          <div className="md:flex align-middle md:space-x-5 sm:block sm:space-y-4 sm:w-full">
            <div className="form-control md:w-1/2 sm:w-full pb-5 pt-3">
              <label className="label">
                <span className="label-text">Country Image URL</span>
              </label>
              <input
                name="countryImage"
                type="text"
                placeholder="Enter country image URL"
                className="input input-bordered w-full p-3"
                required
              />
            </div>
            <div className="form-control md:w-1/2 sm:w-full pb-5">
              <label className="label">
                <span className="label-text">Country Name</span>
              </label>
              <input
                name="countryName"
                type="text"
                placeholder="Enter country name"
                className="input input-bordered w-full p-3"
                required
              />
            </div>
          </div>

          {/* Visa Type Dropdown */}
          <div className="form-control pb-5">
            <label className="label">
              <span className="label-text">Visa Type</span>
            </label>
            <select
              name="visaType"
              className="select select-bordered w-full p-3"
              required
            >
              <option value="Tourist visa">Tourist visa</option>
              <option value="Student visa">Student visa</option>
              <option value="Official visa">Official visa</option>
              <option value="Business visa">Business visa</option>
              <option value="Transit visa">Transit visa</option>
            </select>
          </div>

          {/* Processing Time */}
          <div className="form-control pb-5">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <input
              type="text"
              name="processingTime"
              placeholder="Enter processing time"
              className="input input-bordered w-full p-3"
              required
            />
          </div>

          {/* Required Documents Checkboxes */}
          <div className="form-control pb-5">
            <label className="label">
              <span className="label-text">Required Documents</span>
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="requiredDocuments"
                  value="Valid passport"
                />
                <span className="ml-2">Valid passport</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="requiredDocuments"
                  value="Visa application form"
                />
                <span className="ml-2">Visa application form</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="requiredDocuments"
                  value="Recent passport-sized photograph"
                />
                <span className="ml-2">Recent passport-sized photograph</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="requiredDocuments"
                  value="Proof of residence"
                />
                <span className="ml-2">Proof of residence</span>
              </label>
            </div>
          </div>

          {/* Description */}
          <div className="form-control pb-5">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              placeholder="Enter a description"
              className="textarea textarea-bordered w-full p-3"
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
              placeholder="Enter age restriction"
              className="input input-bordered w-full p-3"
              required
            />
          </div>

          {/* Fee */}
          <div className="form-control pb-5">
            <label className="label">
              <span className="label-text">Fee</span>
            </label>
            <input
              type="number"
              name="fee"
              placeholder="Enter visa fee"
              className="input input-bordered w-full p-3"
              required
            />
          </div>

          {/* Validity */}
          <div className="form-control pb-5">
            <label className="label">
              <span className="label-text">Validity</span>
            </label>
            <input
              type="date"
              name="validity"
              placeholder="Enter visa validity period"
              className="input input-bordered w-full p-3"
              required
            />
          </div>

          {/* Application Method */}
          <div className="form-control pb-5">
            <label className="label">
              <span className="label-text">Application Method</span>
            </label>
            <input
              type="text"
              name="applicationMethod"
              placeholder="Enter application method"
              className="input input-bordered w-full p-3"
              required
            />
          </div>

          {/* Add Visa Button */}
          <div className="w-full">
            <input
              type="submit"
              value="Add Visa"
              className="btn btn-block bg-gray-700 text-white py-3"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVisa;
