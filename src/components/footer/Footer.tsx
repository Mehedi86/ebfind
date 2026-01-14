'use client'

import React from 'react'
import { Droplet, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Blood Donation', href: '#donate' },
    { name: 'Events', href: '#events' },
    { name: 'Volunteer', href: '#volunteer' },
    { name: 'Stories', href: '#stories' },
    { name: 'Contact', href: '#contact' }
  ]

  const resources = [
    { name: 'Blood Types', href: '#blood-types' },
    { name: 'Donation Process', href: '#process' },
    { name: 'Eligibility', href: '#eligibility' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Safety Guidelines', href: '#safety' },
    { name: 'Blog', href: '#blog' }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ]

  return (
    <footer className="w-full bg-gradient-to-b from-gray-950 via-red-950/50 to-gray-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Droplet className="h-8 w-8 text-red-400 fill-red-400" />
              <h3 className="text-2xl font-bold text-white">BloodDonate</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Saving lives, one donation at a time. Join us in making a difference 
              in your community through blood donation.
            </p>
            {/* Social Media Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-red-500/20 rounded-full border border-white/10 hover:border-red-400/50 transition-all duration-300 group"
                  >
                    <IconComponent className="h-5 w-5 text-gray-400 group-hover:text-red-400 transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-gray-400 hover:text-red-400 text-sm transition-colors duration-300"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  123 Health Street, Dhaka, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red-400 flex-shrink-0" />
                <a
                  href="tel:+8801234567890"
                  className="text-gray-400 hover:text-red-400 text-sm transition-colors"
                >
                  +880 1234 567890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-red-400 flex-shrink-0" />
                <a
                  href="mailto:info@blooddonate.com"
                  className="text-gray-400 hover:text-red-400 text-sm transition-colors"
                >
                  info@blooddonate.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} BloodDonate. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 fill-red-400" />
              <span>for saving lives</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
