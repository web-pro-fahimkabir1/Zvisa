import Faq from "react-faq-component";
import { Link } from "react-router-dom";

const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "What is Zvisa?",
      content:
        "Zvisa is a platform that simplifies the process of managing and applying for visas. We provide tools to track visa applications, add and manage visa-related information, and explore available visas.",
    },
    {
      title: "Is Zvisa free to use?",
      content:
        "Yes, Zvisa offers free access to most features. However, premium features (if applicable) may require a subscription or one-time payment.",
    },
    {
      title: "How do I create an account on Zvisa?",
      content: (
        <>
          Click the{" "}
          <Link className="text-[#4F709C]" to={"/register"}>
            Register
          </Link>{" "}
          button in the navigation bar, fill in your details, and follow the
          verification process to set up your account.
        </>
      ),
    },
    {
      title: "What features does Zvisa provide for users?",
      content: (
        <ul>
          <li>Viewing and exploring visa types.</li>
          <li>Adding and managing your visa applications.</li>
          <li>Tracking previously added visas.</li>
          <li>Personalized recommendations (if applicable).</li>
        </ul>
      ),
    },
  ],
};

const FAQ = () => {
  return (
    <div className="w-9/12 mx-auto mt-5 bg-base">
      <Faq
        data={data}
        styles={{
          titleTextColor: "#4F709C",
          rowTitleColor: "#4F709C",
          rowContentColor: "grey",
          bgColor: "base-300",
        }}
      ></Faq>
    </div>
  );
};

export default FAQ;
