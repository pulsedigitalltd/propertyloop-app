import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function Product() {
  const features = [
    {
      title: "Profile",
      description: "Learn how to set up your profile in Property Loop",
      icon: "👤"
    },
    {
      title: "Listing",
      description: "Learn how to add a new listing in Property Loop",
      icon: "🏠"
    },
    {
      title: "Vendor Access",
      description: "Learn how to give your vendors access in Property Loop",
      icon: "🔑"
    },
    {
      title: "Inspection Feedback",
      description: "Learn how to add inspection feedback in Property Loop",
      icon: "📋"
    },
    {
      title: "Share Documents",
      description: "Learn how to upload and share documents in Property Loop",
      icon: "📄"
    },
    {
      title: "Calendar",
      description: "Learn how to add a new calendar event in Property Loop",
      icon: "📅"
    },
    {
      title: "New Offer",
      description: "Learn how to add a new offer in Property Loop",
      icon: "💼"
    },
    {
      title: "Messages",
      description: "Learn how to send messages to your vendor in Property Loop",
      icon: "💬"
    },
    {
      title: "Run Open Homes",
      description: "Learn how Property Loop can help make your open home administration a breeze",
      icon: "🏡"
    }
  ];

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
            <Link href="/product" className="text-purple-600 dark:text-purple-400 font-semibold transition">Product</Link>
            <Link href="/signup" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition">Sign Up</Link>
            <Link href="/signin" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition">Sign In</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight max-w-4xl mx-auto">
              Vendor management
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 mt-2">
                made easy
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Property Loop becomes the central hub to manage all vendor comms, helps set expectations, generate open home reports and more.
            </p>
            <div className="flex gap-4 justify-center flex-wrap pt-4">
              <Link href="/signup">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-10 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Register
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950 px-10 text-lg transition-all duration-300 hover:scale-105">
                Book Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Introduction */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Learn more about how Property Loop works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            These helpful videos will guide you through all the features
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 px-6 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-6">
                    <span className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium group-hover:gap-2 transition-all">
                      Learn more
                      <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Ready to streamline your real estate business?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
            Start using Property Loop today and transform how you manage vendor communications
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/signup">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-12 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Buy Now
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950 px-12 text-lg transition-all duration-300 hover:scale-105">
              Book Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                PropertyLoop
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Real estate software that helps agents generate leads, save time, and sell more property.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-purple-400 transition">Home</Link></li>
                <li><Link href="/product" className="hover:text-purple-400 transition">Product</Link></li>
                <li><Link href="/signup" className="hover:text-purple-400 transition">Sign Up</Link></li>
                <li><Link href="/signin" className="hover:text-purple-400 transition">Sign In</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/terms" className="hover:text-purple-400 transition">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="hover:text-purple-400 transition">Privacy Policy</Link></li>
                <li><Link href="/contact" className="hover:text-purple-400 transition">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} PropertyLoop. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

