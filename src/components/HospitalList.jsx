import React from "react";
import { useTranslation } from "react-i18next";

const HospitalsList = () => {
  const { t } = useTranslation();

  const locations = t("programs.locations", { returnObjects: true });

  // console.log(locations);

  return (
    <div className="relative rounded-2xl overflow-hidden mt-12 max-w-4xl mx-auto">
      <div className="w-1/2 h-full absolute inset-0">
        <img
          src="/images/image2.jpg"
          alt="Two female medical professionals reviewing information on a tablet"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-[#cf6239] opacity-50"></div>
      </div>

      <div className="relative ml-auto  w-full md:w-[63%]  bg-[#002379] p-4 md:p-6 rounded-2xl">
        <h2
          className="text-white text-lg leading-6 font-[330] mb-4 "
          dangerouslySetInnerHTML={{ __html: t("programs.heading") }}
        >
          {/* List Of Hospitals Where
          <br />
          Firmsts Fellowship Programmes Are Conducted. */}
        </h2>

        <div className="flex flex-col gap-3">
          {locations.map((location, index) => (
            <div key={index} className="bg-[#cf6239] rounded-2xl p-4 ">
              <h3 className="text-white text-xl tracking-wide font-[450] mb-2">
                {location.title}
              </h3>
              <ul className="text-white -space-y-1 font-[350]">
                {location.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
                {/* <li>Duna Medical Centre- Budapest</li>
               <li>University Of Szeged- Szeged</li> */}
              </ul>
            </div>
          ))}
        </div>

        {/* <div className="bg-[#cf6239] rounded-2xl p-4 mb-3">
         

          

          <h3 className="text-white text-xl tracking-wide font-[450] mb-2">
            INDIA
          </h3>
          <ul className="text-white -space-y-1 font-[350]">
            <li>Ucms-Delhi</li>
            <li>Amrita Hospital- Kochi</li>
            <li>Amrita Hospital- Faridabad</li>
            <li>Tata Medical Centre- Calcutta</li>
            <li>Cachar Cancer Centre- Silchar, Assam</li>
          </ul>
        </div> */}

        {/* <div className="bg-[#cf6239] rounded-2xl p-4 mb-3">
          <h3 className="text-white text-xl tracking-wide font-[450] mb-2">
            HUNGARY
          </h3>
          <ul className="text-white -space-y-1 font-[350]">
            <li>Duna Medical Centre- Budapest</li>
            <li>University Of Szeged- Szeged</li>
          </ul>
        </div> */}

        {/* <div className="bg-[#cf6239] rounded-2xl p-4 mb-1">
          <h3 className="text-white text-xl tracking-wide font-[450] mb-2">
            SWITZERLAND
          </h3>
          <ul className="text-white -space-y-1 font-[350]">
            <li>Genolier Clinic- Genolier</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default HospitalsList;
