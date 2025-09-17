'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'Home', href: '#home' },
      { name: 'About Us', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Process', href: '#process' },
      { name: 'Contact', href: '#contact' },
    ],
    services: [
      { name: 'Custom Software', href: '#services' },
      { name: 'Mobile Apps', href: '#services' },
      { name: 'Web Development', href: '#services' },
      { name: 'Product Development', href: '#services' },
      { name: 'Support & Maintenance', href: '#services' },
    ],
    legal: [
      { name: 'Terms and Conditions', href: '/docs/terms-and-conditions.pdf' },
      { name: 'Privacy Policy', href: '/docs/privacy-policy.pdf' },
    ]
  }

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Company Info */}
          <div>
            <Link href="#home" className="flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="w-8 h-8 bg-teal-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">EZ</span>
              </div>
              <span className="text-lg sm:text-xl font-bold">Ez Innovations</span>
            </Link>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              Leading South African software development company specializing in custom software solutions, 
              mobile app development, and web development services.
            </p>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
                <a href="mailto:info@ezinnovations.co.za" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  info@ezinnovations.co.za
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
                <a href="tel:+27848078024" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  +27 (84) 807 8024
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
                <span className="text-gray-300 text-sm sm:text-base">Cape Town, South Africa</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0 text-sm sm:text-base">
            <div className="text-gray-400">
              © {currentYear} Ez Innovations (Pty) Ltd. All Rights Reserved
            </div>
            <div className="flex items-center space-x-4 text-gray-400">
              <Link 
                href="/docs/terms-and-conditions.pdf" 
                target="_blank"
                className="hover:text-white transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
              <span>•</span>
              <Link 
                href="/docs/privacy-policy.pdf" 
                target="_blank"
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
