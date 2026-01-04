"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Droplet, User, LogIn, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/donors', label: 'Donors' },
    { href: '/request', label: 'Request Blood' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg group-hover:bg-white transition-colors shadow-lg">
                <Droplet className="h-6 w-6 text-red-600" fill="currentColor" />
              </div>
              <span className="text-xl md:text-2xl font-bold text-white drop-shadow-lg group-hover:text-red-100 transition-colors">
                EBFind
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm lg:text-base font-medium text-white hover:text-red-200 hover:bg-white/10 rounded-md transition-all drop-shadow-md"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-red-200 hover:bg-white/10 backdrop-blur-sm"
            >
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-red-200 hover:bg-white/10 backdrop-blur-sm border border-white/30"
            >
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button
              size="sm"
              className="bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all"
            >
              <User className="h-4 w-4 mr-2" />
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-white hover:text-red-200 hover:bg-white/10 transition-colors backdrop-blur-sm"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-black/60 backdrop-blur-md border-t border-white/20">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-white hover:text-red-200 hover:bg-white/10 rounded-md transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 space-y-2 border-t border-white/20">
            <Button
              variant="outline"
              className="w-full justify-start text-white border-white/30 hover:bg-white/10 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start text-white border-white/30 hover:bg-white/10 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button
              className="w-full justify-start bg-red-600 hover:bg-red-700 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="h-4 w-4 mr-2" />
              Register
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
