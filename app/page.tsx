import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:from-gray-950 dark:to-gray-900">
      {/* Navigation - Property Loop Style */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              PropertyLoop
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition">Home</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition">Product</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition">Sign Up</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition">Sign In</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Property Loop Style */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block mb-8">
              <Image
                src="/property-devices.png"
                alt="Property Loop"
                width={600}
                height={600}
                priority
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight max-w-4xl mx-auto">
              Software for Real Estate agents that frees you up to 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 mt-2">
                sell more property.
              </span>
            </h1>
            <div className="inline-block bg-yellow-100 dark:bg-yellow-900/30 px-8 py-4 rounded-2xl border-2 border-yellow-400 dark:border-yellow-600">
              <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                30-day money back guarantee*
              </p>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Property Loop&apos;s online software helps you generate new leads, saves you time and money, is easy to use and allows you to streamline your business from wherever you are.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Try Property Loop with a 30-day money back guarantee*
            </p>
            <div className="flex gap-4 justify-center flex-wrap pt-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-10 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Try now
              </Button>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              *See terms & conditions for details
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits - Property Loop Style */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/30 border-purple-200 dark:border-purple-800 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative text-center">
                <div className="w-16 h-16 bg-purple-600 dark:bg-purple-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Generate Leads</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Generates leads by creating a point of difference with future vendors and buyers
                </p>
              </div>
            </Card>

            <Card className="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/30 border-blue-200 dark:border-blue-800 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative text-center">
                <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">⏱️</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Save Time</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Enables world-class service and reporting to your vendors and helps manage their expectations
                </p>
              </div>
            </Card>

            <Card className="group relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/30 border-green-200 dark:border-green-800 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative text-center">
                <div className="w-16 h-16 bg-green-600 dark:bg-green-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">💰</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Save Money</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Reduce number of tools & admin costs and share documents easily at no extra cost
                </p>
              </div>
            </Card>

            <Card className="group relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/50 dark:to-orange-900/30 border-orange-200 dark:border-orange-800 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative text-center">
                <div className="w-16 h-16 bg-orange-600 dark:bg-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">✨</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Easy to Use</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Makes it easy to take your business digital - you&apos;ll be doing in seconds what used to take hours
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Property Loop Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 dark:text-white">
            Why Property Loop?
          </h2>
          <div className="relative aspect-video bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-3xl overflow-hidden border-2 border-purple-200 dark:border-purple-800 group hover:scale-105 transition-transform duration-500 shadow-2xl">
            <iframe
              src="https://player.vimeo.com/video/425012266?title=0&byline=0&portrait=0"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Property Loop Introduction"
            ></iframe>
          </div>
          <div className="mt-8">
            <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950 px-10 text-lg transition-all duration-300 hover:scale-105">
              Book Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/50 dark:to-blue-950/50 border-purple-200 dark:border-purple-800 p-12 text-center shadow-2xl">
            <div className="mb-6 text-5xl">💬</div>
            <blockquote className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 italic mb-8 leading-relaxed">
              &quot;Property Loop has been a game changer in helping us double our business in the last 6 months...It takes a good agent and makes them a great agent!&quot;
            </blockquote>
            <div className="border-t border-purple-200 dark:border-purple-800 pt-6">
              <p className="font-bold text-xl text-gray-900 dark:text-white">Ivan Wong Kee</p>
              <p className="text-purple-600 dark:text-purple-400 font-medium">Sales Manager</p>
              <p className="text-gray-600 dark:text-gray-400">RE/MAX Capital Legacy</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Ready to transform your real estate business?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
            Join successful agents who are using Property Loop to generate more leads and close more deals
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-12 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Buy Now
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950 px-12 text-lg transition-all duration-300 hover:scale-105">
              Book Demo
            </Button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
            30-day money back guarantee • No credit card required • Cancel anytime
          </p>
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
                <li><a href="#" className="hover:text-purple-400 transition">Home</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Product</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Sign Up</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Sign In</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Contact</a></li>
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
