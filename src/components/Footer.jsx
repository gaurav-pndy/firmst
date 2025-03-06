import React from "react";
import { useTranslation } from "react-i18next";
// import { FaTelegramPlane, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#032b61] mt-12">
      <div className=" text-white w-full max-w-4xl mx-auto py-5">
        <h2 className="text-center text-lg md:text-[1.73rem] font-[300] tracking-wide text-[#cf6239] uppercase mb-4">
          {t("footer.title")}
        </h2>

        <div className="flex flex-col md:flex-row  justify-between items-center md:items-end text-center md:text-left px-3">
          <div className="mb-4 flex flex-col gap-3 md:mb-0">
            <img
              src="/images/FIRMST_SA_White_Hor_Logo.png"
              alt=""
              className="w-52 mb-2"
            />
            <p className="text-xs md:text-sm font-[350]">
              {t("address.title")} {t("address.descriptionOne")}{" "}
              {t("address.descriptionTwo")}
            </p>
          </div>

          <div className="flex gap-4 items-center ">
            <span className="text-sm ">+7 999 999 000</span>
            <div className="flex gap-3   ">
              <img
                src="/images/telegram.png"
                alt=""
                className="w-7 h-7 rounded-lg"
              />
              <img
                src="/images/whatsapp.png"
                alt=""
                className="w-7 h-7 rounded-lg"
              />
              <img
                src="/images/instagram.png"
                alt=""
                className="w-7 h-7 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" border-4 border-orange-500"></div>
    </div>
  );
};

export default Footer;
