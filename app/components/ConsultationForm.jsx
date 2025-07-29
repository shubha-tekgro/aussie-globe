"use client";

import React, { useState } from "react";
import { RedCTA } from "@/components/RedCTA";
import { CircleCheckBig } from "lucide-react";

export const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interest: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white/90 rounded-lg shadow-md overflow-hidden mr-12"
    >
      <div className="p-6 space-y-4 text-sm md:text-base text-gray-700">
        <div className="bg-gradient-to-r from-blue to-blue-500 text-white px-6 py-2 rounded-lg">
          <h2 className="text-2xl font-semibold">Get Your Free Consultation</h2>
          <p className="text-sm text-white/90 font-thin">
            Expert advice tailored to your goals
          </p>
        </div>
        <div>
          <label htmlFor="fullName" className="block font-medium mb-1">
            Enter your full name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 outline-none"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none bg-gray-50"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block font-medium mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none bg-gray-50"
          />
        </div>

        <div>
          <label htmlFor="interest" className="block font-medium mb-1">
            Interested In <span className="text-red-500">*</span>
          </label>
          <select
            id="interest"
            name="interest"
            required
            value={formData.interest}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none bg-gray-50"
          >
            <option value="" disabled>
              Select your interest
            </option>
            <option value="education">Education</option>
            <option value="migration">Migration</option>
            <option value="visa">Visa Assistance</option>
          </select>
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="agreed"
            name="agreed"
            required
            checked={formData.agreed}
            onChange={handleChange}
            className="mt-1 bg-gray-50"
          />
          <label htmlFor="agreed" className="text-sm text-gray-400">
            By continuing, you agree to our{" "}
            <a href="#" className="underline text-blue-500">
              terms
            </a>{" "}
            and{" "}
            <a href="#" className="underline text-blue-500">
              privacy policy
            </a>
          </label>
        </div>

        <div className="pt-4">
          <RedCTA
            text="Get a Free Consultation"
            className="w-full justify-center py-3"
          />
        </div>


<div className="flex items-center justify-end gap-1">
  <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-green-100 text-green">
    <CircleCheckBig size={18} />
  </span>
  <span className="text-gray-600 font-light text-sm">Trusted Partner</span>
</div>
      </div>
    </form>
  );
};
