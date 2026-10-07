import React from 'react'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  const socials = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      link: "https://github.com/mac-101",
      color: "bg-gray-900 hover:bg-gray-800",
      username: "@yourusername"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
      color: "bg-blue-700 hover:bg-blue-600",
      username: "Charles MacAnthony"
    },
    
  ]

  return (
    <section id="contact" className="py-12 px-4 bg-white min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Get In Touch</h2>
          <p className="text-gray-600">Let's work together</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 reveal" 
        data-animation="fade-right">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <a href="mailto:charlesmacanthony797@gmail.com" className="text-gray-700 hover:text-blue-600">
                  charlesmacanthony797@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-600" />
                <a href="https://wa.me/2349161489807" className="text-gray-700 hover:text-green-600">
                  +234 916 148 9807
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700">Abia, Nigeria</span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Connect</h3>
              <div className="flex gap-4">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors reveal" 
                    data-animation="pop-in"
                    data-delay={`${index * 0.1}s`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* WhatsApp Quick Contact */}
          <div className="bg-green-50 p-6 rounded-xl border border-green-200 reveal" 
        data-animation="pop-in" data-delay="0.2s">
            <h3 className="font-bold text-gray-900 mb-4">Quick Response</h3>
            <p className="text-gray-600 mb-6 text-sm">
              For fastest reply, message me on WhatsApp
            </p>
            <a
              href="https://wa.me/2349161489807"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}