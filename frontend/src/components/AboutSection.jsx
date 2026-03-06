import React from "react";
import { companyInfo } from "../data/mockData";
import logo from "../assets/Logo-about.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE TEXT */}
          <div className="max-w-2xl">

            {/* Heading */}
            <h2 className="text-5xl font-bold mb-10 tracking-wide">
              <span className="text-black">WHO</span>{" "}
              <span className="text-gray-400">WE ARE</span>
            </h2>

            {/* Paragraph 1 */}
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nestled in Mysuru for {companyInfo.yearsOfExperience} years,
              Royal Realities Mysuru stands as a beacon of excellence in
              plotted development. Our projects seamlessly blend modern living
              with nature, offering meticulously planned spaces that transcend
              mere pieces of land. With over{" "}
              {companyInfo.satisfiedClients.toLocaleString()} delighted
              customers, our commitment to quality, transparency, and customer
              satisfaction is unwavering.
            </p>

            {/* Paragraph 2 */}
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Strategically located in Mysuru, our plots strike the perfect
              balance between urban convenience and serenity. As we envision a
              future in sustainable development, Royal Realities Mysuru invites
              you to join our community, where dreams take root on plots that
              go beyond investments, becoming gateways to a life well-lived.
            </p>

            {/* Final Line */}
            <p className="text-lg font-semibold text-gray-800">
              Welcome to Royal Realities Mysuru – where plots transform into
              destinies.
            </p>

          </div>

          {/* RIGHT SIDE LOGO */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={logo}
              alt="Royal Realities Logo"
              className="w-[420px] h-auto object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;