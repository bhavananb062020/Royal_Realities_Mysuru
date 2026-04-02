import React, { useState } from 'react';
import { companyInfo } from '../data/mockData';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { useToast } from '../hooks/use-toast';
import { MapPin, Phone, Mail } from 'lucide-react';
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().trim().required("Name is required"),
  email: yup.string().email("Enter valid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Enter valid 10-digit phone number")
    .required("Phone is required"),
  message: yup.string().required("Message is required"),
  acceptTerms: yup.boolean().oneOf([true], "Please accept terms"),
});

const ContactSection = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    acceptTerms: false
  });

  const [errors, setErrors] = useState({});

  const validateForm = async () => {
    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err) {
      const newErrors = {};
      err.inner.forEach((e) => {
        newErrors[e.path] = e.message;
      });
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

      if (res.ok) {
        toast({
          title: "Success",
          description: "We will contact you soon",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          acceptTerms: false,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">CONTACT US</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-amber-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p>{companyInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-amber-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-amber-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* NAME */}
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    setErrors({ ...errors, name: "" });
                  }}
                />
                {errors.name && (
                  <p className="text-yellow-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <Input
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    setErrors({ ...errors, email: "" });
                  }}
                />
                {errors.email && (
                  <p className="text-yellow-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* PHONE */}
              <div>
                <Input
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    setErrors({ ...errors, phone: "" });
                  }}
                />
                {errors.phone && (
                  <p className="text-yellow-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    setErrors({ ...errors, message: "" });
                  }}
                  rows={5}
                />
                {errors.message && (
                  <p className="text-yellow-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* CHECKBOX */}
              <div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                  className="border-black data-[state=checked]:bg-black data-[state=checked]:text-white"
                    checked={formData.acceptTerms}
                    onCheckedChange={(checked) => {
                      setFormData((prev) => ({
                        ...prev,
                        acceptTerms: checked === true,
                      }));
                      setErrors({ ...errors, acceptTerms: "" });
                    }}
                  />
                  <label className="text-sm">
                    I Accept all terms & conditions
                  </label>
                </div>

                {errors.acceptTerms && (
                  <p className="text-yellow-500 text-xs mt-1">
                    {errors.acceptTerms}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full bg-amber-500 text-white">
                Submit
              </Button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;