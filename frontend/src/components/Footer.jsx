import logo from "../assets/logo-removebg.png";
import {
  Linkedin,
  Instagram,
  MessageSquareMore,
} from "lucide-react";
import React, { useState } from "react";
import EnquiryModal from "./EnquiryModal";

const Footer = () => {
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);

  return (
    <footer className="bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">

          {/* LEFT SECTION */}
          <div className="w-full md:w-1/2 text-left">
            <img
              src={logo}
              alt="Royal Realities Mysuru"
              className="h-28 w-28 md:h-32 md:w-32 mb-6"
            />

            <p className="text-gray-300 text-sm uppercase tracking-wide mb-3">
              Contact Info
            </p>

            <p className="text-gray-300 mb-2">
              +91 6361766997
            </p>

            <p className="text-gray-300 break-all">
              contact.royalrealitiesmysuru@gmail.com
            </p>
          </div>

          {/* RIGHT SOCIAL ICONS */}
         <div className="w-full md:w-1/2 flex justify-start md:justify-end items-end gap-4 mt-6 md:mt-0">

            {/* <a
              href="#"
              className="bg-white w-12 h-12 flex items-center justify-center rounded-full hover:scale-110 transition"
            >
              <Facebook className="text-blue-600 w-6 h-6" />
            </a> */}

            <a
              href="https://www.linkedin.com/company/royal-realities-mysuru/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 hover:shadow-lg transition-all duration-300"
            >
              <Linkedin className="text-blue-700 w-6 h-6" />
            </a>

            {/* <a
              href="#"
              className="bg-white w-12 h-12 flex items-center justify-center rounded-full hover:scale-110 transition"
            >
              <Youtube className="text-red-600 w-6 h-6" />
            </a> */}

            <a
              href="https://instagram.com/royal_realities" target="_blank"
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 hover:shadow-lg transition-all duration-300"
            >
              <Instagram className="text-pink-600 w-6 h-6" />
            </a>

            {/* Enquiry */}
            <button
              onClick={() => setShowEnquiryModal(true)}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 hover:shadow-lg transition-all duration-300"
            >
              <MessageSquareMore className="w-6 h-6 text-[#080703]" />
            </button>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center">

          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Royal Realities Mysuru. All rights reserved.
          </p>

        </div>

      </div>

      <EnquiryModal
        open={showEnquiryModal}
        onClose={() => setShowEnquiryModal(false)}
      />
    </footer>
  );
};

export default Footer;