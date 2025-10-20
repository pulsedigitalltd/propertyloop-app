import Link from "next/link";

export default function Footer() {
  return (
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
  );
}

