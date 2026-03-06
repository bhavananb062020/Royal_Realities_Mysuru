import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { companyInfo } from '../data/mockData';
import logo from "../assets/logo.jpeg";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <></>
        // <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        //         <div className="flex justify-between items-center py-4">
        //             {/* Logo */}
        //             <div className="flex items-center space-x-3">
        //                 <img
        //                     src={logo}
        //                     alt="Company Logo"
        //                     className="h-12 w-auto object-contain"
        //                 />
        //                 {/* <h1 className="text-2xl font-bold text-gray-800">
        //                     {companyInfo.name}
        //                 </h1> */}
        //             </div>

        //             {/* Desktop Navigation */}
        //             <nav className="hidden md:flex items-center space-x-8">
        //                 <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-amber-600 transition-colors">
        //                     Home
        //                 </button>
        //                 <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-600 transition-colors">
        //                     About Us
        //                 </button>
        //                 <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-amber-600 transition-colors">
        //                     Projects
        //                 </button>
        //                 <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-amber-600 transition-colors">
        //                     Testimonials
        //                 </button>
        //                 <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-amber-600 transition-colors">
        //                     Gallery
        //                 </button>
        //                 <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-600 transition-colors">
        //                     Contact
        //                 </button>
        //             </nav>

        //             {/* Contact Info */}
        //             <div className="hidden lg:flex items-center space-x-4">
        //                 <a href={`tel:${companyInfo.phone}`} className="flex items-center text-gray-700 hover:text-amber-600 transition-colors">
        //                     <Phone className="w-4 h-4 mr-2" />
        //                     <span className="text-sm">{companyInfo.phone}</span>
        //                 </a>
        //             </div>

        //             {/* Mobile Menu Button */}
        //             <button
        //                 onClick={() => setIsMenuOpen(!isMenuOpen)}
        //                 className="md:hidden text-gray-700 hover:text-amber-600 transition-colors"
        //             >
        //                 {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        //             </button>
        //         </div>
        //     </div>

        //     {/* Mobile Menu */}
        //     {isMenuOpen && (
        //         <div className="md:hidden bg-white border-t border-gray-200">
        //             <nav className="flex flex-col space-y-4 px-4 py-4">
        //                 <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-amber-600 transition-colors">
        //                     Home
        //                 </button>
        //                 <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-amber-600 transition-colors">
        //                     About Us
        //                 </button>
        //                 <button onClick={() => scrollToSection('projects')} className="text-left text-gray-700 hover:text-amber-600 transition-colors">
        //                     Projects
        //                 </button>
        //                 <button onClick={() => scrollToSection('testimonials')} className="text-left text-gray-700 hover:text-amber-600 transition-colors">
        //                     Testimonials
        //                 </button>
        //                 <button onClick={() => scrollToSection('gallery')} className="text-left text-gray-700 hover:text-amber-600 transition-colors">
        //                     Gallery
        //                 </button>
        //                 <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-amber-600 transition-colors">
        //                     Contact
        //                 </button>
        //                 <a href={`tel:${companyInfo.phone}`} className="flex items-center text-gray-700 hover:text-amber-600 transition-colors">
        //                     <Phone className="w-4 h-4 mr-2" />
        //                     {companyInfo.phone}
        //                 </a>
        //             </nav>
        //         </div>
        //     )}
        // </header>
    );
};

export default Header;
// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";
// import logo from "../assets/logo-removebg.png";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//       setIsOpen(false);
//     }
//   };

//   return (
//     <>
//       {/* Header */}
//       <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex justify-between items-center py-6">

//             {/* Logo */}
//             <img
//               src={logo}
//               alt="Logo"
//               className="h-16 w-auto object-contain"
//             />

//             {/* Hamburger */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-white z-50"
//             >
//               {isOpen ? (
//                 <X size={32} />
//               ) : (
//                 <Menu size={32} />
//               )}
//             </button>

//           </div>
//         </div>
//       </header>

//       {/* Fullscreen Mobile Menu */}
//       <div
//         className={`fixed inset-0 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center text-white text-2xl space-y-8 transform transition-transform duration-500 ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <button onClick={() => scrollToSection("home")} className="hover:text-amber-400 transition">
//           Home
//         </button>
//         <button onClick={() => scrollToSection("about")} className="hover:text-amber-400 transition">
//           About
//         </button>
//         <button onClick={() => scrollToSection("projects")} className="hover:text-amber-400 transition">
//           Projects
//         </button>
//         <button onClick={() => scrollToSection("gallery")} className="hover:text-amber-400 transition">
//           Gallery
//         </button>
//         <button onClick={() => scrollToSection("contact")} className="hover:text-amber-400 transition">
//           Contact
//         </button>
//       </div>
//     </>
//   );
// };

// export default Header;