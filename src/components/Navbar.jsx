const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-3 px-2  md:px-6 ">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div>
          <img src="/images/logo.avif" alt="" className="w-40" />
        </div>
        <div className="flex gap-2 md:gap-3 items-center">
          <span className="mr-3 text-xs md:text-sm text-purple-950">
            +7 999 999 000
          </span>
          <img
            src="/images/telegram.png"
            alt=""
            className="w-5 md:w-7 h-5 md:h-7 rounded-lg"
          />
          <img
            src="/images/whatsapp.png"
            alt=""
            className="w-5 md:w-7 h-5 md:h-7 rounded-lg"
          />
          <img
            src="/images/instagram.png"
            alt=""
            className="w-5 md:w-7 h-5 md:h-7 rounded-lg"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
