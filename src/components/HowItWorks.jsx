import React from "react";
import { useTranslation } from "react-i18next";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      title: t("process.steps.0.title"),
      description: t("process.steps.0.description"),

      icon: (
        <FaArrowRight className="bg-purple-900 p-2 text-white w-8 h-8 rounded-full " />
      ),
    },
    {
      title: t("process.steps.1.title"),
      description: t("process.steps.1.description"),

      icon: (
        <FaArrowRight className="bg-purple-900 p-2 text-white w-8 h-8 rounded-full " />
      ),
    },
    {
      title: t("process.steps.2.title"),
      description: t("process.steps.2.description"),

      icon: (
        <FaArrowRight className="bg-purple-900 p-2 text-white w-8 h-8 rounded-full " />
      ),
    },
    {
      title: t("process.steps.3.title"),
      description: t("process.steps.3.description"),

      icon: (
        <FaArrowRight className="bg-purple-900 p-2 text-white w-8 h-8 rounded-full " />
      ),
    },
    {
      title: t("process.steps.4.title"),
      description: t("process.steps.4.description"),

      icon: (
        <FaCheck className="bg-green-500 p-2 text-white w-8 h-8 rounded-full " />
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-3 md:px-0 mt-10 ">
      <h2 className="text-center text-2xl font-bold text-blue-900 mb-8">
        {t("process.heading")}
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
