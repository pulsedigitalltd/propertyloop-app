"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full blur-md opacity-30"></div>
              <svg className="relative" width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="28" fill="url(#gradient)" opacity="0.1"/>
                <path 
                  d="M30 12L15 24V45C15 46.1046 15.8954 47 17 47H25V35H35V47H43C44.1046 47 45 46.1046 45 45V24L30 12Z" 
                  fill="#4A7BB7" 
                  stroke="#4A7BB7" 
                  strokeWidth="1.5" 
                  strokeLinejoin="round"
                />
                <path d="M30 12L12 27" stroke="#6B9BD6" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M30 12L48 27" stroke="#6B9BD6" strokeWidth="2.5" strokeLinecap="round"/>
                <rect x="19" y="29" width="5" height="5" rx="1" fill="white" opacity="0.7"/>
                <rect x="36" y="29" width="5" height="5" rx="1" fill="white" opacity="0.7"/>
                <path 
                  d="M50 15C50 15 52 13 54 15C56 17 56 19 54 21L51 24" 
                  stroke="#6B9BD6" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path d="M54 21L52 19L50 21" fill="#6B9BD6"/>
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="60" y2="60">
                    <stop offset="0%" stopColor="#9333ea" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-bold text-gray-800 dark:text-gray-100">PROPERTY</span>
                <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">LOOP</span>
              </div>
              <span className="text-[10px] text-gray-500 dark:text-gray-400 leading-none">Real Estate Software For Real Agents</span>
            </div>
          </div>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link 
            href="/" 
            className={`transition ${
              isActive('/') 
                ? 'text-purple-600 dark:text-purple-400 font-semibold' 
                : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
            }`}
          >
            Home
          </Link>
          <Link 
            href="/product" 
            className={`transition ${
              isActive('/product') 
                ? 'text-purple-600 dark:text-purple-400 font-semibold' 
                : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
            }`}
          >
            Product
          </Link>
          <Link 
            href="/signup" 
            className={`transition ${
              isActive('/signup') 
                ? 'text-purple-600 dark:text-purple-400 font-semibold' 
                : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
            }`}
          >
            Sign Up
          </Link>
          <Link 
            href="/signin" 
            className={`transition ${
              isActive('/signin') 
                ? 'text-purple-600 dark:text-purple-400 font-semibold' 
                : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
            }`}
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}

