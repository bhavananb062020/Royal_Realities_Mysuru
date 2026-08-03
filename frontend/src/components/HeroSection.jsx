import React, { useState } from "react";
import {
  Menu,
  X,
  Instagram,
  User,
  Mail,
  Phone,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Sprout,
  Handshake,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { useToast } from "../hooks/use-toast";
import * as yup from "yup";

import logo from "../assets/logo-removebg.png";
// import whatsappIcon from "../assets/whatsappIcon.png";
import callIcon from "../assets/callIcon.png";
// import heroBg from "../assets/hero-bg.png";

const validationSchema = yup.object().shape({
  name: yup.string().trim().required("Name is required"),
  email: yup
    .string()
    .trim()
    .email("Email is required")
    .required("Email is required"),
  phone: yup
    .string()
    .trim()
    .matches(/^[0-9]{10}$/, "Enter valid 10-digit phone number")
    .required("Phone number is required"),
  acceptTerms: yup
    .boolean()
    .oneOf([true], "Please accept the terms & conditions"),
});

const HeroSection = () => {
  const { toast } = useToast();
  const [menuOpen, setMenuOpen] = useState(false);

  // Load an elegant serif display font for the headline
  React.useEffect(() => {
    if (document.getElementById("rr-playfair-font")) return;
    const link = document.createElement("link");
    link.id = "rr-playfair-font";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&display=swap";
    document.head.appendChild(link);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    acceptTerms: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    acceptTerms: "",
  });

  const validateForm = async () => {
    try {
      await validationSchema.validate(formData, { abortEarly: false });

      setErrors({
        name: "",
        email: "",
        phone: "",
        acceptTerms: "",
      });

      return true;
    } catch (err) {
      const newErrors = {
        name: "",
        email: "",
        phone: "",
        acceptTerms: "",
      };

      if (err.inner) {
        err.inner.forEach((error) => {
          if (error.path && !newErrors[error.path]) {
            newErrors[error.path] = error.message;
          }
        });
      }

      setErrors(newErrors);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = await validateForm();
    if (!isValid) return;
    // http://localhost:5000/api/contact
    // https://api.royalrealitiesmysuru.in/api/contact

    try {
      const res = await fetch("https://api.royalrealitiesmysuru.in/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast({
          title: "Success",
          description: "We will contact you soon",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          acceptTerms: false,
        });

        setErrors({
          name: "",
          email: "",
          phone: "",
          acceptTerms: "",
        });
      } else {
        toast({
          title: "Error",
          description: data.message || "Something went wrong",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Server Error",
        description: "Could not connect to server",
        variant: "destructive",
      });
    }
  };

  const features = [
    {
      icon: ShieldCheck,
      title: "Trust & Reliability",
      desc: "Your trust is our priority",
    },
    {
      icon: MapPin,
      title: "Prime Locations",
      desc: "Carefully chosen for you",
    },
    {
      icon: Sprout,
      title: "Premium Plots",
      desc: "For a better tomorrow",
    },
    {
      icon: Handshake,
      title: "Transparent Deals",
      desc: "Honest & clear process",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[820px] md:min-h-screen w-full flex flex-col"
    >
      {/* Background (own layer, so overflow-hidden never clips text below) */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef"

          className="absolute inset-0 w-full h-full object-cover"
          alt="Sunrise over the plots at Royal Realities Mysuru"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/85"></div>
      </div>

      {/* LOGO — left edge matches the hero heading's left edge below */}
      <div className="absolute top-4 left-6 md:top-6 md:left-16 z-30">
        <img
          src={logo}
          alt="logo"
          className="h-16 md:h-24 lg:h-28 w-auto object-contain"
        />
      </div>

      {/* HAMBURGER */}
      <div
        className="fixed top-4 right-4 z-50 bg-black/40 p-3 cursor-pointer"
        onClick={() => setMenuOpen(true)}
      >
        <Menu size={26} color="white" />
      </div>

      {/* HERO TEXT — normal flow, grows with content, never gets cut off */}
      <div className="relative z-20 flex-1 flex items-center px-6 md:px-16 pt-28 md:pt-24 pb-6">
        <div className="text-white max-w-2xl">
          <h1
            className="font-semibold leading-[1.15] tracking-wide text-[clamp(1.6rem,4.6vw,2.9rem)]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Royal Realities
            <br />
            Mysuru
          </h1>

          <div className="w-20 sm:w-24 h-[3px] bg-[#D4AF37] mt-4 mb-2 sm:mt-5 sm:mb-2"></div>

          <p className="text-[clamp(0.9rem,2vw,1.25rem)] font-light tracking-wide text-white/90">
            Premium Residential Plots
          </p>

          <p className="mt-1 text-[clamp(0.75rem,1.6vw,1.15rem)] tracking-[3px] sm:tracking-[5px] font-medium text-[#D4AF37] uppercase">
            Turning Land Into Legacy
          </p>
        </div>
      </div>

      {/* CONTACT ICONS */}
      <div className="fixed right-4 md:right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
        <a
          href="https://instagram.com/royal_realities"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-3 rounded-full"
        >
          <Instagram className="w-5 h-5 md:w-6 md:h-6 text-black" strokeWidth={1.75} />
        </a>

        <a href="tel:6361766997" className="bg-white p-3 rounded-full">
          <img src={callIcon} className="w-5 h-5 md:w-6 md:h-6" alt="Call" />
        </a>
      </div>

      {/* FORM */}
      <div className="relative z-20">
        <div className="mx-4 md:mx-0 rounded-2xl bg-black/80 backdrop-blur-md py-6 px-5 md:px-10 border border-[#D4AF37]/30">
          <form
            onSubmit={handleSubmit}
            className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 items-start"
          >
            {/* Name */}
            <div className="w-full">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#f3d38a]" />
                <Input
                  placeholder="Your Name"
                  className="bg-transparent border-gray-400 text-white placeholder-gray-400 pl-9"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, name: e.target.value }));
                    setErrors((prev) => ({ ...prev, name: "" }));
                  }}
                />
              </div>
              {errors.name && (
                <p className="!text-yellow-500 font-medium text-xs mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="w-full">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#f3d38a]" />
                <Input
                  placeholder="Your Email"
                  className="bg-transparent border-gray-400 text-white placeholder-gray-400 pl-9"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, email: e.target.value }));
                    setErrors((prev) => ({ ...prev, email: "" }));
                  }}
                />
              </div>
              {errors.email && (
                <p className="!text-yellow-500 font-medium text-xs mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="w-full">
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#f3d38a]" />
                <Input
                  placeholder="Your Phone"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  className="bg-transparent border-gray-400 text-white placeholder-gray-400 pl-9"
                  value={formData.phone}
                  onChange={(e) => {
                    const digitsOnly = e.target.value.replace(/\D/g, "");
                    const wasTooLong = digitsOnly.length > 10;
                    const capped = digitsOnly.slice(0, 10);

                    setFormData((prev) => ({ ...prev, phone: capped }));
                    setErrors((prev) => ({
                      ...prev,
                      phone: wasTooLong ? "Phone number cannot exceed 10 digits" : "",
                    }));
                  }}
                />
              </div>
              {errors.phone && (
                <p className="!text-yellow-500 font-medium text-xs mt-1">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Terms */}
            <div className="w-full flex flex-col">
              <div className="flex items-start text-white text-sm space-x-2">
                <Checkbox
                  className="!border-white text-white data-[state=checked]:bg-[#D4AF37] data-[state=checked]:text-black mt-1"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) => {
                    setFormData((prev) => ({
                      ...prev,
                      acceptTerms: checked === true,
                    }));
                    setErrors((prev) => ({ ...prev, acceptTerms: "" }));
                  }}
                />
                <span className="leading-5">
                  I accept all terms &amp; conditions
                </span>
              </div>

              {errors.acceptTerms && (
                <p className="!text-yellow-500 font-medium text-xs mt-1">
                  {errors.acceptTerms}
                </p>
              )}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="bg-gradient-to-r from-[#f3d38a] to-[#D4AF37] text-black font-semibold hover:opacity-90 w-full md:w-auto h-10 flex items-center justify-center gap-2"
            >
              SEND ENQUIRY
              <ArrowRight className="w-4 h-4" />
            </Button>
          </form>
        </div>

        {/* TRUST BADGES STRIP */}
        <div className="bg-black/90 px-4 md:px-10 py-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-center gap-4">
                <div className="w-11 h-11 flex-shrink-0 rounded-full border border-[#D4AF37]/50 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#f3d38a]" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold uppercase tracking-wide">
                    {title}
                  </h4>
                  <p className="text-white/60 text-xs mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MENU */}
      {menuOpen && (
        <div className="fixed top-0 right-0 h-full w-full sm:w-80 bg-black/50 backdrop-blur-sm z-50 flex flex-col items-center justify-center text-white text-xl space-y-6">
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setMenuOpen(false)}
          >
            <X size={28} />
          </button>

          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>
            Service
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
        </div>
      )}
    </section>
  );
};

export default HeroSection;