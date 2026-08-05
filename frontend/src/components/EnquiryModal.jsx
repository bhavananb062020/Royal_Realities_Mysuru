import {
    X,
    User,
    Mail,
    Phone,
} from "lucide-react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import React, { useState } from "react";
import { useToast } from "../hooks/use-toast";
import * as yup from "yup";

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
const EnquiryModal = ({
    open,
    onClose,
}) => {
    if (!open) return null;

    const { toast } = useToast();

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
         onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">

            <div className="bg-[#111] rounded-2xl border border-[#D4AF37]/30 w-full max-w-md p-6 relative">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:text-[#D4AF37]"
                >
                    <X className="w-6 h-6" />
                </button>

                <h2 className="text-2xl font-semibold text-white mb-6">
                    Enquiry Form
                </h2>


                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >
                    {/* Name */}
                    <div>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#f3d38a]" />

                            <Input
                                placeholder="Your Name"
                                className="h-12 bg-transparent border-gray-500 text-white placeholder:text-gray-400 pl-10"
                                value={formData.name}
                                onChange={(e) => {
                                    setFormData((prev) => ({ ...prev, name: e.target.value }));
                                    setErrors((prev) => ({ ...prev, name: "" }));
                                }}
                            />
                        </div>

                        {errors.name && (
                            <p className="text-yellow-500 text-xs mt-1">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#f3d38a]" />

                            <Input
                                placeholder="Your Email"
                                className="h-12 bg-transparent border-gray-500 text-white placeholder:text-gray-400 pl-10"
                                value={formData.email}
                                onChange={(e) => {
                                    setFormData((prev) => ({ ...prev, email: e.target.value }));
                                    setErrors((prev) => ({ ...prev, email: "" }));
                                }}
                            />
                        </div>

                        {errors.email && (
                            <p className="text-yellow-500 text-xs mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Phone */}
                    <div>
                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#f3d38a]" />

                            <Input
                                placeholder="Your Phone"
                                type="tel"
                                maxLength={10}
                                className="h-12 bg-transparent border-gray-500 text-white placeholder:text-gray-400 pl-10"
                                value={formData.phone}
                                onChange={(e) => {
                                    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);

                                    setFormData((prev) => ({
                                        ...prev,
                                        phone: digits,
                                    }));

                                    setErrors((prev) => ({
                                        ...prev,
                                        phone: "",
                                    }));
                                }}
                            />
                        </div>

                        {errors.phone && (
                            <p className="text-yellow-500 text-xs mt-1">
                                {errors.phone}
                            </p>
                        )}
                    </div>

                    {/* Terms */}
                    <div className="flex items-start gap-2">
                        <Checkbox
                            checked={formData.acceptTerms}
                            onCheckedChange={(checked) => {
                                setFormData((prev) => ({
                                    ...prev,
                                    acceptTerms: checked === true,
                                }));

                                setErrors((prev) => ({
                                    ...prev,
                                    acceptTerms: "",
                                }));
                            }}
                        />

                        <span className="text-sm text-white leading-5">
                            I accept all terms & conditions
                        </span>
                    </div>

                    {errors.acceptTerms && (
                        <p className="text-yellow-500 text-xs">
                            {errors.acceptTerms}
                        </p>
                    )}

                    <Button
                        type="submit"
                        className="w-full h-12 bg-gradient-to-r from-[#f3d38a] to-[#D4AF37] text-black font-semibold"
                    >
                        SEND ENQUIRY
                    </Button>
                </form>

            </div>

        </div>
    )
};

export default EnquiryModal;