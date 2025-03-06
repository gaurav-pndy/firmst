import { useTranslation } from "react-i18next";
import "../utils/i18n";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="bg-white shadow-md py-3 px-2  md:px-6 ">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div>
          <img src="/images/FIRMST_SA_Hor_Logo.png" alt="" className="w-36" />
        </div>
        <div className="flex gap-2 md:gap-3 items-center">
          <span className="mr-3  md:text-lg text-purple-950">
            +7 999 999 000
          </span>
          <img
            src="/images/telegram.png"
            alt=""
            className="w-5 md:w-7 h-5 md:h-7 rounded-lg hidden md:block"
          />
          <img
            src="/images/whatsapp.png"
            alt=""
            className="w-5 md:w-7 h-5 md:h-7 rounded-lg hidden md:block"
          />
          <img
            src="/images/instagram.png"
            alt=""
            className="w-5 md:w-7 h-5 md:h-7 rounded-lg hidden md:block"
          />
          <div className="md:ml-4  ">
            <select
              className="cursor-pointer border px-2 py-1 rounded-lg"
              onChange={(e) => changeLanguage(e.target.value)}
            >
              <option className="text-xs md:text-base" value="en">
                English
              </option>
              <option className="text-xs md:text-base" value="ru">
                Русский
              </option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
