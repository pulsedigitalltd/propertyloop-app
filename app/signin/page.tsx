"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign in submitted:", formData);
    // Handle sign-in logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white dark:from-gray-950 dark:to-gray-900">
      <Header />

      {/* Sign In Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 min-h-screen flex items-center">
        <div className="max-w-md mx-auto w-full">
          <Card className="p-8 md:p-10 shadow-2xl border-purple-200 dark:border-purple-800">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
              Sign In
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
              Welcome back to PropertyLoop
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:bg-gray-800 dark:text-white transition"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:bg-gray-800 dark:text-white transition"
                  placeholder="Enter your password"
                />
              </div>

              {/* Forgot Password Link */}
              <div className="text-right">
                <Link 
                  href="/forgot-password" 
                  className="text-sm text-purple-600 dark:text-purple-400 hover:underline font-medium"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Sign In
              </Button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="text-purple-600 dark:text-purple-400 hover:underline font-medium">
                  Sign Up
                </Link>
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

