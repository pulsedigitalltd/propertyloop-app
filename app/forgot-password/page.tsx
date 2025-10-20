"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password reset requested for:", email);
    setSubmitted(true);
    // Handle password reset logic here
  };

  return (
    <div className="min-h-screen bg-white dark:from-gray-950 dark:to-gray-900">
      <Header />

      {/* Forgot Password Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 min-h-screen flex items-center">
        <div className="max-w-md mx-auto w-full">
          <Card className="p-8 md:p-10 shadow-2xl border-purple-200 dark:border-purple-800">
            {!submitted ? (
              <>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                  Forgot Password?
                </h1>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
                  Enter your email address and we&apos;ll send you a link to reset your password
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:bg-gray-800 dark:text-white transition"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Send Reset Link
                  </Button>
                </form>

                {/* Back to Sign In */}
                <div className="mt-6 text-center">
                  <Link 
                    href="/signin" 
                    className="text-sm text-purple-600 dark:text-purple-400 hover:underline font-medium"
                  >
                    ← Back to Sign In
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="text-center">
                  <div className="mb-6 text-6xl">✉️</div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Check Your Email
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    We&apos;ve sent a password reset link to <span className="font-semibold">{email}</span>
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                    Didn&apos;t receive the email? Check your spam folder or try again.
                  </p>
                  
                  <div className="space-y-4">
                    <Button 
                      onClick={() => setSubmitted(false)}
                      size="lg" 
                      variant="outline"
                      className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950 py-3 text-lg transition-all duration-300"
                    >
                      Try Again
                    </Button>
                    
                    <Link href="/signin">
                      <Button 
                        size="lg" 
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Back to Sign In
                      </Button>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </Card>
        </div>
      </section>
    </div>
  );
}

