import React from "react";
import logo from "../assets/logo-removebg.png";
import {
  Facebook,
  Linkedin,
  Youtube,
  Instagram
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex flex-col md:flex-row md:justify-between md:items-center">

          {/* LEFT SECTION */}
          <div>

            <img
              src={logo}
              alt="Ashwasurya Realities"
              className="h-32 w-32 mb-8"
            />

            <p className="text-gray-300 text-sm uppercase tracking-wide mb-4">
              Contact Info
            </p>

            <p className="text-gray-300 mb-2">
              +918339963996
            </p>

            <p className="text-gray-300">
              geethanjali@ashwasuryarealities.com
            </p>

          </div>

          {/* RIGHT SOCIAL ICONS */}
          <div className="flex space-x-6 mt-10 md:mt-0">

            <a
              href="#"
              className="bg-white w-12 h-12 flex items-center justify-center rounded-full hover:scale-110 transition"
            >
              <Facebook className="text-blue-600 w-6 h-6" />
            </a>

            <a
              href="#"
              className="bg-white w-12 h-12 flex items-center justify-center rounded-full hover:scale-110 transition"
            >
              <Linkedin className="text-blue-700 w-6 h-6" />
            </a>

            <a
              href="#"
              className="bg-white w-12 h-12 flex items-center justify-center rounded-full hover:scale-110 transition"
            >
              <Youtube className="text-red-600 w-6 h-6" />
            </a>

            <a
              href="#"
              className="bg-white w-12 h-12 flex items-center justify-center rounded-full hover:scale-110 transition"
            >
              <Instagram className="text-pink-600 w-6 h-6" />
            </a>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center">

          <p className="text-gray-300 text-sm">
            © 2026 Ashwasurya Realities. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;