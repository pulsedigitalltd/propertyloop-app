"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    company: "",
    townCity: "",
    findOutAbout: "",
    companySize: "",
    contactPreference: "email"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white dark:from-gray-950 dark:to-gray-900">
      <Header />

      {/* Sign Up Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto w-full">
          <Card className="p-8 md:p-12 shadow-2xl border-purple-200 dark:border-purple-800">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
              Sign Up
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
              Create your PropertyLoop account
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:bg-gray-800 dark:text-white transition"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:bg-gray-800 dark:text-white transition"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:bg-gray-800 dark:text-white transition"
                  placeholder="john.doe@example.com"
                />
              </div>

              {/* Mobile */}
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mobile *
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:bg-gray-800 dark:text-white transition"
                  placeholder="+64 21 123 4567"
                />
              </div>

              {/* Company and Town/City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:bg-gray-800 dark:text-white transition"
                    placeholder="Your Company Name"
                  />
                </div>
                <div>
                  <label htmlFor="townCity" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Town/City *
                  </label>
                  <input
                    type="text"
                    id="townCity"
                    name="townCity"
                    required
                    value={formData.townCity}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:bg-gray-800 dark:text-white transition"
                    placeholder="Auckland"
                  />
                </div>
              </div>

              {/* Where did you find out about us */}
              <div>
                <label htmlFor="findOutAbout" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Where did you find out about us? *
                </label>
                <select
                  id="findOutAbout"
                  name="findOutAbout"
                  required
                  value={formData.findOutAbout}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:bg-gray-800 dark:text-white transition"
                >
                  <option value="">Please select...</option>
                  <option value="google">Google</option>
                  <option value="industry-literature">Industry Literature</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Number of people in company */}
              <div>
                <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Number of people in company *
                </label>
                <input
                  type="number"
                  id="companySize"
                  name="companySize"
                  required
                  min="1"
                  value={formData.companySize}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:bg-gray-800 dark:text-white transition"
                  placeholder="e.g., 10"
                />
              </div>

              {/* Contact Preference */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  How would you like to be contacted? *
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="contactPreference"
                      value="email"
                      checked={formData.contactPreference === "email"}
                      onChange={handleChange}
                      className="w-4 h-4 text-purple-600 focus:ring-purple-600 focus:ring-2"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Email</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="contactPreference"
                      value="sms"
                      checked={formData.contactPreference === "sms"}
                      onChange={handleChange}
                      className="w-4 h-4 text-purple-600 focus:ring-purple-600 focus:ring-2"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">SMS</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Create Account
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{" "}
                <Link href="/signin" className="text-purple-600 dark:text-purple-400 hover:underline font-medium">
                  Sign In
                </Link>
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

