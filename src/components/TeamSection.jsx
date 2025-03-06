import React from "react";
import { useTranslation } from "react-i18next";

// const teamMembers = [
//   {
//     name: "Murali Muthu",
//     role: "Department Of Pathoanatomy",
//     hospital: "Amrita Hospital",
//     location: "Kochi, India",
//   },
//   { name: "Pavel Frolov", role: "", hospital: "", location: "" },
//   { name: "Anna Voroninna", role: "", hospital: "", location: "" },
// ];

const TeamSection = () => {
  const { t } = useTranslation();

  const teamMembers = t("team.members", { returnObjects: true });

  return (
    <div className="px-3 md:px-0  mt-12 flex justify-center">
      <div className="bg-white rounded-2xl shadow-lg px-8 py-7  max-w-4xl w-full">
        <h2 className="text-center text-2xl font-[800] tracking-wide text-purple-900 mb-3">
          OUR TEAM
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center md:w-64"
            >
              <div className="w-36  h-36 bg-gray-300 rounded-full mb-4"></div>
              <h3 className=" font-bold text-[#cf6239] mb-1">
                {member.name.toUpperCase()}
              </h3>

              <p
                className="text-purple-900 leading-tight font-[400] text-sm"
                dangerouslySetInnerHTML={{ __html: member.description }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
