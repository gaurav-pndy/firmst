import { IoStar } from "react-icons/io5";

const features = [
  {
    desc: "15 Years Of Experience In Organising Successful Medical Programmes For Health Care Professionals",
  },
  {
    desc: "Exposure To Numerous Medical Cases & Hands-On Opportunities! <br/> <br/> More Than 100 Medical Interns Have Been Sent Aboard!",
  },
  {
    desc: "Get Trained By Renowned Medical Experts",
  },
  {
    desc: "Fast & Guaranteed Visa Application Services",
  },
];

const InfoCards = () => {
  return (
    <div className="max-w-4xl  mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 px-4 md:px-1  my-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="relative bg-gradient-to-br from-[#021e6b] to-[#7b4348] text-white px-2 pt-5 pb-2 rounded-2xl shadow-lg flex flex-col justify-between min-h-[200px]"
        >
          <p
            className="font-[330]  leading-[1.15] pl-3 pr-6"
            dangerouslySetInnerHTML={{ __html: feature.desc }}
          ></p>
          <div className=" relative h-12 ">
            <div className="absolute bottom-0 right-0 bg-[#cf6239] w-8 h-8 flex items-center justify-center rounded-full shadow-md">
              <IoStar />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
