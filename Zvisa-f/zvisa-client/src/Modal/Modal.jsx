import React from "react";

const Modal = ({ show, onClose, children, title }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Modal container */}
      <div className="bg-[#F4F3F0] rounded-lg p-6 w-full max-w-lg md:max-w-2xl">
        {/* Modal Header */}
        {title && <h2 className="text-lg font-bold mb-4">{title}</h2>}

        {/* Scrollable content */}
        <div className="overflow-y-auto max-h-[70vh]">
          <div>
            {children}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-start mt-4">
          <button
            className="bg-red-800 btn text-white px-4 py-2 rounded-md hover:bg-red-700"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
