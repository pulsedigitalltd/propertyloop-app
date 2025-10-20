import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="min-h-screen bg-white dark:from-gray-950 dark:to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              PropertyLoop
            </div>
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition">Home</Link>
            <Link href="/product" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition">Product</Link>
            <Link href="/signup" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition">Sign Up</Link>
            <Link href="/signin" className="text-purple-600 dark:text-purple-400 font-semibold transition">Sign In</Link>
          </div>
        </div>
      </nav>

      {/* Sign In Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 min-h-screen flex items-center">
        <div className="max-w-md mx-auto w-full">
          <Card className="p-8 shadow-2xl border-purple-200 dark:border-purple-800">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
              Sign In
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
              Welcome back to PropertyLoop
            </p>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Sign in form coming soon...
            </p>
            <div className="mt-8 text-center">
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

