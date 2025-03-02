const ContactForm = () => {
  return (
    <div className="bg-white p-6 mt-10 md:p-8 rounded-xl shadow-gray-300 shadow-2xl max-w-4xl mx-auto border-3 border-gray-400 md:border-gray-200">
      <h3 className="text-xl mt-2 md:text-[1.35rem] font-extrabold text-center text-[#cf6239] uppercase leading-6 tracking-wide">
        Submit the Request Form <br className="hidden md:inline" />
        <span className="text-[#cf6239] font-bold">
          to Receive Complimentary Consultation Now!
        </span>
      </h3>

      <h4 className="tracking-wide font-[800] text-center text-purple-900 mt-3">
        CONTACT INFORMATION
      </h4>

      <form className="grid md:max-w-[75%] mx-auto grid-cols-1 md:grid-cols-2 gap-7 mt-4">
        <div>
          <label className="block mb-1 text-gray-500">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#cf6239]"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-500">
            Contact Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#cf6239]"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-500">
            Specialization of Interest <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#cf6239]"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-500">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#cf6239]"
          />
        </div>
      </form>

      <div className="md:max-w-[75%] mx-auto mt-5">
        <p className="text-xs text-gray-500 mt-4 tracking-wide leading-tight">
          Your personal data is collected and processed in accordance with the
          Rules of the EU Parliament and Council of April 27, 2016 No. 2016/679,
          namely: “Regulations on the protection of individuals regarding the
          processing of their personal data and free movement of such data”, as
          well as on the basis of the repeal of Directive 95/46 / We (general
          data protection rules), i.e. only on the basis of the consent of the
          owner of such data.
        </p>

        <div className="flex items-center gap-2 mt-3">
          <input type="checkbox" className="w-2 h-2" />
          <label className="text-[0.65rem] text-gray-500">
            I have read and agree to the website terms and conditions
            <span className="text-red-500">*</span>
          </label>
        </div>

        <button className="bg-[#cf6239] hover:bg-[#b24e2a] transition text-white font-semibold py-3 w-[50%] text-sm cursor-pointer block mx-auto rounded mt-4">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
