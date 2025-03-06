const StudyAbroad = () => {
  return (
    <div className="bg-[#f3f6fb]  mt-10  rounded-xl shadow-gray-300 shadow-2xl max-w-4xl mx-auto border-3 overflow-hidden border-gray-400 md:border-gray-200">
      <div className="flex flex-col-reverse md:flex-row">
        <div className="md:w-1/2 p-4 pt-0  md:p-8 md:pr-0  ">
          <img
            src="/images/FIRMST_SA_Hor_Logo.png"
            className="w-32 mb-4"
            alt=""
          />
          <div className=" flex flex-col gap-4 text-[0.86rem] leading-[1.01rem] tracking-[0.005em] text-[#4464a4]">
            <p>
              FIRMST Study Abroad is a platform for tailoring personalized plan
              for international clinical or scientific rotations in many fields
              of Medicine and Allied Sciences. We are aimed to facilitate a
              better experience of away externships by working with reliable
              partner institutions, orchestrating official paperwork and helping
              deal with organizational issues before and during the rotation. We
              have already had much positive feedback from students and doctors
              who had such experience and eventually come to the decision to
              launch a full-fledged international exchange program. You can be
              the next candidate!
            </p>

            <p>
              {" "}
              <span className="font-bold text-[#072469]">
                History behind and our Philosophy
              </span>{" "}
              <br />
              Some of you may have heard about or even participated in the
              FIRMST Forum – the Forum for Interdisciplinary Research in Medical
              Science and Technology which was first launched back in 2020. It
              was a separate project organized by the students under the
              umbrella of the Eurasian Federation of Oncology (EAFO) and lead by
              the EAFO Founder & CEO, Surgical Oncologist and Philanthropist Dr.
              Somasundaram SUBRAMANIAN (Dr. Soma). The scope of the FIRMST
              activities has been vast and included most medical specialties and
              allied sciences.
            </p>

            <p>
              {" "}
              As the time passed by, many members of our team graduated from the
              universities or achieved the other professional milestones and
              studied abroad, inspired by the history of the previous EAFO
              scholarships holders or doctors receiving any other help on the
              behalf of EAFO, either connections abroad or personal advice from
              the experienced EAFO or FIRMST experts. The preparation process
              for any rotation abroad from zero is very tedious and
              time-consuming, we went through all of this ourselves. Now, the
              time has come to share this experience with you, to shape it for
              your endeavors and benefit your career towards a better future in
              the interest of your patients and advancement of science and
              technology.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <img
            src="/images/study-abroad-img.jpg"
            alt=""
            className="h-full object-cover"
          />
          <div className="h-full w-full absolute top-0  bg-gradient-to-b  md:bg-gradient-to-l from-transparent via-80% via-transparent to-100% to-[#f3f6fb]"></div>
        </div>
      </div>
    </div>
  );
};

export default StudyAbroad;
