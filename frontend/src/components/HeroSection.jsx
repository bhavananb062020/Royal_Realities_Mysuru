import React, { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { useToast } from "../hooks/use-toast";
import * as yup from "yup";

import logo from "../assets/logo-removebg.png";
// import whatsappIcon from "../assets/whatsappIcon.png";
import callIcon from "../assets/callIcon.png";

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

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between"
    >
      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Hero"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      {/* LOGO */}
      <div className="absolute top-4 left-4 md:top-6 md:left-10 z-30">
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

      {/* HERO TEXT */}
      <div className="relative md:absolute md:top-[35%] left-6 md:left-16 z-20 text-white mt-32 md:mt-0 max-w-xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide leading-tight">
          INVEST IN YOUR
          <span className="block font-light mt-2">FUTURE HOME</span>
        </h1>
      </div>

      {/* CONTACT ICONS */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
        <a
          href="https://instagram.com/royal_realities"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-3 shadow"
        >
          <Instagram className="w-5 h-5 md:w-6 md:h-6 text-black" />
        </a>

        <a href="tel:6361766997" className="bg-white p-3 shadow">
          <img src={callIcon} className="w-5 h-5 md:w-6 md:h-6" alt="Call" />
        </a>
      </div>

      {/* FORM */}
      <div className="relative md:absolute md:bottom-10 left-0 right-0 z-30 px-4 md:px-10 mt-10 md:mt-0">
        <div className="bg-black/80 py-6 px-4 md:px-8 max-w-7xl mx-auto rounded-md">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 items-start"
          >
            {/* Name */}
            <div className="w-full">
              <Input
                placeholder="Name"
                className="bg-transparent border-gray-400 text-white placeholder-gray-400"
                value={formData.name}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, name: e.target.value }));
                  setErrors((prev) => ({ ...prev, name: "" }));
                }}
              />
              {errors.name && (
                <p className="!text-yellow-500 font-medium text-xs mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="w-full">
              <Input
                placeholder="Email"
                className="bg-transparent border-gray-400 text-white placeholder-gray-400"
                value={formData.email}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, email: e.target.value }));
                  setErrors((prev) => ({ ...prev, email: "" }));
                }}
              />
              {errors.email && (
                <p className="!text-yellow-500 font-medium text-xs mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="w-full">
              <Input
                placeholder="Phone"
                className="bg-transparent border-gray-400 text-white placeholder-gray-400"
                value={formData.phone}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, phone: e.target.value }));
                  setErrors((prev) => ({ ...prev, phone: "" }));
                }}
              />
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
                  className="!border-white text-white data-[state=checked]:bg-white data-[state=checked]:text-black mt-1"
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
                  I Accept all terms & conditions
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
              className="bg-yellow-500 text-black font-semibold hover:bg-yellow-600 w-full md:w-auto h-10"
            >
              Submit
            </Button>
          </form>
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