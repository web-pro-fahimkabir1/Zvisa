import { FaQuoteLeft } from "react-icons/fa";

const ExtraSectionTwo = () => {
  return (
    <section className="py-12 px-6 bg-base-100 rounded-md mb-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#4F709C]">
          What Our Clients Say
        </h2>
        <p className="mt-4 text-">
          Trusted by travelers worldwide, Zvisa makes visa applications simple
          and stress-free.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-base-100 border shadow-md rounded-lg p-6">
            <FaQuoteLeft className="text-[#4F709C] text-3xl mb-4" />
            <p className="text-slate-400 italic">
              "Zvisa helped me get my Schengen visa in record time. The process
              was smooth and hassle-free!"
            </p>
            <h4 className="mt-4 text-lg font-semibold text-[#4F709C]">
              - John Doe
            </h4>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-base-100 border shadow-md rounded-lg p-6">
            <FaQuoteLeft className="text-[#4F709C] text-3xl mb-4" />
            <p className="text-slate-400 italic">
              "The team at Zvisa is professional and reliable. They guided me
              through every step of the application."
            </p>
            <h4 className="mt-4 text-lg font-semibold text-[#4F709C]">
              - Sarah Lee
            </h4>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-base-100 border shadow-md rounded-lg p-6">
            <FaQuoteLeft className="text-[#4F709C] text-3xl mb-4" />
            <p className="text-slate-400 italic">
              "Thanks to Zvisa, I could focus on planning my trip while they
              handled the paperwork."
            </p>
            <h4 className="mt-4 text-lg font-semibold text-[#4F709C]">
              - Michael Smith
            </h4>
          </div>
        </div>

        <button className="mt-8 bg-[#4F709C] text-white px-6 py-2 rounded-lg hover:bg-[#3E5A7D]">
          See More Testimonials
        </button>
      </div>
    </section>
  );
};

export default ExtraSectionTwo;
