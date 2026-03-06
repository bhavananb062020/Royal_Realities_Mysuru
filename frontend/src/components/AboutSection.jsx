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
              Royal Realities Mysuru has been in the real estate field for more than {companyInfo.yearsOfExperience} years,
              building trust and delivering quality developments. What started as a small-scale venture has today grown into a recognized brand in the industry. We specialize in buying land, developing layouts, marketing, and selling residential and investment plots. With dedication and transparency, we have successfully served{" "}
              {companyInfo.satisfiedClients.toLocaleString()} happy customers.
            </p>

            {/* Paragraph 2 */}
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our journey began with our first projects in Mandya, after which we expanded our developments across Mysuru. We focus on creating well-planned plots in promising locations that offer both living and investment opportunities. With strong market knowledge and a customer-first approach, we aim to make property buying simple, safe, and valuable, and we are now planning to expand our projects into Bangalore in the near future.
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