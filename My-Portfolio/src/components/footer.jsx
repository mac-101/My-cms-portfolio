import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/yourusername" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/yourusername" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:hello@charles.com" }
  ]

  return (
    <footer className="py-8 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center gap-4 mb-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <p className="text-gray-400">
            © {currentYear} Charles MacAnthony. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}