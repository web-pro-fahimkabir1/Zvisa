import Swal from "sweetalert2";

const MyVisaApplicationCard = ({ userVisa, onDelete }) => {
  const {
    _id,
    email,
    firstName,
    lastName,
    appliedDate,
    fee,
    visaDetails: {
      countryName,
      countryImage,
      visaType,
      processingTime,
      validity,
      applicationMethod,
    },
  } = userVisa;

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
        fetch(`https://zvisa-server.vercel.app/userVisas/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Visa has been deleted.",
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
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={countryImage}
          alt={countryName}
          className="w-24 h-24 object-cover rounded-full border border-gray-200 mb-4 md:mb-0 md:mr-6"
        />
        <div className="flex-grow">
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
        <p>
          <span className="font-medium">Applied Date:</span> {appliedDate}
        </p>
        <p>
          <span className="font-medium">Applicant Name:</span> {firstName}{" "}
          {lastName}
        </p>
        <p>
          <span className="font-medium">Applicant Email:</span> {email}
        </p>
      </div>
      <button
        className="btn bg-red-500 text-white w-full mt-4 hover:bg-red-600 transition"
        onClick={handleCancel}
      >
        Cancel Application
      </button>
    </div>
  );
};

export default MyVisaApplicationCard;
