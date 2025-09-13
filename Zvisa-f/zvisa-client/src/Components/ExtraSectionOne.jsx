import {
  FaGlobe,
  FaHandsHelping,
  FaRegClock,
  FaUserShield,
} from "react-icons/fa";

const ExtraSectionOne = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto text-center bg-base-200 p-3 py-5 rounded-md">
        <h2 className="text-3xl font-bold text-[#4F709C]">Why Choose Us?</h2>
        <p className="mt-4 text-[#4F709C]">
          We make global travel hassle-free with fast, reliable visa processing.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <FaGlobe className="text-slate-400 text-4xl" />
            <h3 className="mt-4 text-lg font-semibold text-slate-400">
              Global Expertise
            </h3>
            <p className="mt-2 text-[#4F709C] text-sm">
              Assistance for visas to any country around the world.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <FaUserShield className="text-slate-400 text-4xl" />
            <h3 className="mt-4 text-lg font-semibold text-slate-400">
              Secure Process
            </h3>
            <p className="mt-2 text-[#4F709C] text-sm">
              Your data and documents are protected with top-notch security.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <FaRegClock className="text-slate-400 text-4xl" />
            <h3 className="mt-4 text-lg font-semibold text-slate-400">
              Quick Turnaround
            </h3>
            <p className="mt-2 text-[#4F709C] text-sm">
              Fast processing to meet your travel deadlines.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="flex flex-col items-center">
            <FaHandsHelping className="text-slate-400 text-4xl" />
            <h3 className="mt-4 text-lg font-semibold text-slate-400">
              Dedicated Support
            </h3>
            <p className="mt-2 text-[#4F709C] text-sm">
              Our team is here to guide you every step of the way.
            </p>
          </div>
        </div>

        <button className="mt-8 bg-[#4F709C] text-white px-6 py-2 rounded-lg hover:bg-[#3E5A7D]">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default ExtraSectionOne;
