import React from "react";

const FeedbackBanner = () => {
  return (
    <div className="bg-gradient-to-r from-[#10256a] to-[#cd5c35] py-7 mx-3  px-4 rounded-2xl max-w-4xl md:mx-auto mt-12">
      <p className="text-white text-center text-xl md:text-2xl font-bold leading-tight tracking-wide">
        Feedback From Our Former Interns! <br />
        You’re Welcome To Network With Our Interns{" "}
        <br className="hidden md:inline" />
        To Learn Further About Us!
      </p>
    </div>
  );
};

export default FeedbackBanner;
