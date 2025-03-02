import React from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const steps = [
  {
    title: "STEP 1",
    description: "Sign Up For Our Complimentary Consultation!",
    icon: (
      <FaArrowRight className="bg-purple-900 p-2 text-white w-8 h-8 rounded-full " />
    ),
  },
  {
    title: "STEP 2",
    description:
      "Fill Up Our Application Form And Let Us Know The Hospital & Specialization Of Your Choice!",
    icon: (
      <FaArrowRight className="bg-purple-900 p-2 text-white w-8 h-8 rounded-full " />
    ),
  },
  {
    title: "STEP 3",
    description:
      "Receive Feedback From Our Internship Specialist And Proceed With Payment.",
    icon: (
      <FaArrowRight className="bg-purple-900 p-2 text-white w-8 h-8 rounded-full " />
    ),
  },
  {
    title: "STEP 4",
    description: "Our Team Will Proceed With Your Documentation Process.",
    icon: (
      <FaArrowRight className="bg-purple-900 p-2 text-white w-8 h-8 rounded-full " />
    ),
  },
  {
    title: "STEP 5",
    description:
      "We Will Assist You To Ensure Successful Completion Of Your Desired Fellowship Programme!",
    icon: (
      <FaCheck className="bg-green-500 p-2 text-white w-8 h-8 rounded-full " />
    ),
  },
];

const HowItWorks = () => {
  return (
    <div className="max-w-4xl mx-auto px-3 md:px-0 mt-10 ">
      <h2 className="text-center text-2xl font-bold text-blue-900 mb-8">
        HOW DO WE WORK?
      </h2>
      <div className="flex flex-col md:flex-row justify-center  gap-3 md:gap-5  mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white border-dashed border-2 border-gray-400 relative p-6 rounded-2xl  md:w-1/5   "
          >
            <h3 className="text-[#cf6239] font-[900] mb-3">{step.title}</h3>
            <p className="text-blue-900 font-[430] text-sm leading-tight mb-8">
              {step.description}
            </p>

            <div className="absolute bottom-2  right-2 w-8 h-8 flex items-center justify-center rounded-full ">
              {step.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
