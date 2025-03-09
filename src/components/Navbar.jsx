import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import "../utils/i18n";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Make navbar visible when scrolling up or at the top
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`bg-white shadow-md h-20 flex items-center  px-4 md:px-6 fixed w-full top-0 left-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-5xl mx-auto w-full flex justify-between items-center">
        <div>
          <img
            src="/images/FIRMST_SA_Hor_Logo.png"
            alt=""
            className="w-28 md:w-36"
          />
        </div>
        <div className="flex flex-row-reverse md:flex-row gap-5 md:gap-3 items-center">
          <div className="flex flex-col-reverse md:flex-row gap-0 items-center md:gap-3">
            <span className="md:mr-3 md:text-lg text-purple-950">
              +7 999 999 000
            </span>
            <div className="flex gap-2 md:gap-3">
              <img
                src="/images/telegram.png"
                alt=""
                className="w-7 h-7 rounded-lg "
              />
              <img
                src="/images/whatsapp.png"
                alt=""
                className="w-7 h-7 rounded-lg "
              />
              <img
                src="/images/instagram.png"
                alt=""
                className="w-7 h-7 rounded-lg"
              />
            </div>
          </div>
          <div className="md:ml-4">
            <select
              className="cursor-pointer border text-lg px-2 py-1 rounded-lg"
              onChange={(e) => changeLanguage(e.target.value)}
            >
              <option className="text-sm md:text-base" value="en">
                English
              </option>
              <option className="text-sm md:text-base" value="ru">
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
