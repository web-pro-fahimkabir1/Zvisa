import React from "react";

const testimonialsData = [
  {
    id: 1,
    name: "Distinctio Animi",
    username: "Aliquam illum",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.",
    img: "https://i.ibb.co.com/JmN9hVx/profile-Pic-3.png",
  },
  {
    id: 2,
    name: "Distinctio Animi",
    username: "Aliquam illum",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.",
    img: "https://i.ibb.co.com/b2hpZf8/profile-Pic-1.png",
  },
  {
    id: 3,
    name: "Distinctio Animi",
    username: "Aliquam illum",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.",
    img: "https://i.ibb.co.com/7pCrLqs/profile-Pic-2.png",
  },
  {
    id: 4,
    name: "Distinctio Animi",
    username: "Aliquam illum",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.",
    img: "https://i.ibb.co.com/fSMrbKR/switzerland.png",
  },
];

const Testimonials = () => {
  return (
    <div>
      <section className="bg-base-100 text-base">
        <div className="container flex flex-col items-center mx-auto md:p-10 md:px-12">
          <h1 className="text-4xl font-semibold leading-none text-center">
            What our customers are saying about us
          </h1>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col max-w-sm mx-4 my-6 shadow-lg"
            >
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
                <p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 text-[#4F709C]"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  {testimonial.body}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 text-[#4F709C]"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#4F709C] text-gray-900">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-700"
                />
                <p className="text-xl font-semibold leading-tight">
                  {testimonial.name}
                </p>
                <p className="text-sm uppercase">{testimonial.username}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
