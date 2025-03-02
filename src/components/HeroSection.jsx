const HeroSection = () => {
  return (
    <div className="relative lg:min-h-[55vh] flex items-center justify-center text-white bg-[#cf6239]">
      <div className="relative w-full pb-6 md:py-0 h-full z-10 flex flex-col-reverse md:flex-row items-center md:justify-between max-w-5xl mx-auto px-4 md:px-0">
        <div className="w-full md:w-[40%] text-center md:text-left my-4 md:my-0  md:pl-4 lg:pl-20">
          <h2 className="text-3xl md:text-[2.1rem] font-[900] leading-tight drop-shadow-xl">
            We Offer The Best Medical Internship{" "}
            <span className="hidden sm:inline">
              <br />
            </span>{" "}
            Programmes Abroad!
          </h2>

          <button className="mt-4 md:mt-6 bg-[#002379] hover:bg-[#001379] cursor-pointer px-4 py-2 rounded text-base md:text-lg text-white shadow-black/60 shadow-md md:shadow-2xl">
            Complimentary Consultation
          </button>
        </div>

        <div className="w-[100vw]  md:w-[60%] flex justify-center  h-fit  md:h-full relative">
          <img
            src="/images/heroImage.jpg"
            alt="Doctor"
            className="h-fit w-full object-contain relative z-10"
          />
          <div
            className="h-full md:hidden absolute inset-0 z-20 bg-gradient-to-b from-transparent via-transparent to-[#cf6239] "
            // style={{
            //   background:
            //     "linear-gradient(to bottom, transparent 0%, transparent 20%, transparent 80%, #cf6239 100%)",
            // }}
          ></div>
          <div
            className="hidden md:block absolute inset-0 z-20"
            style={{
              background:
                "linear-gradient(to right, #cf6239 0%, transparent 20%, transparent 80%, #cf6239 100%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
