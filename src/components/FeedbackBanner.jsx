import React from "react";
import { useTranslation } from "react-i18next";

const FeedbackBanner = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-r from-[#10256a] to-[#cd5c35] py-7 mx-3  px-4 rounded-2xl max-w-4xl md:mx-auto mt-12">
      <p className="text-white text-center text-xl md:text-2xl font-bold leading-tight tracking-wide">
        {t("feedback.heading")} <br />
        <span
          dangerouslySetInnerHTML={{ __html: t("feedback.subheading") }}
        ></span>
      </p>
    </div>
  );
};

export default FeedbackBanner;
