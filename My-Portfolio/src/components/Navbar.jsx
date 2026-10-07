import { useState, useEffect } from "react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.clientHeight
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      {/* Floating Navbar Container */}
      <div className={`w-full px-4 md:px-6 z-50 flex justify-center fixed top-4 transition-all duration-300 ${
        isScrolled ? 'scale-95' : ''
      }`}>
        <nav className={`flex w-full max-w-5xl justify-between items-center py-3 px-6 rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-xl border border-gray-200/30'
            : 'bg-white/10 backdrop-blur-md border border-white/20'
        }`}>
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection("home")}
          >
            <div className={`w-10 h-10 flex items-center justify-center text-lg font-serif rounded-full font-bold transition-all duration-300 ${
              isScrolled
                ? 'bg-blue-600 text-white'
                : 'bg-white/20 text-white backdrop-blur-sm'
            } group-hover:scale-110 group-hover:rotate-12`}>
              M
            </div>
            <h1 className={`font-bold text-xl transition-all duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Dev<span className="text-blue-500">Mac</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex font-medium gap-6 lg:gap-8 items-center">
            {navItems.slice(0, -1).map((item) => (
              <li
                key={item.id}
                className={`relative cursor-pointer transition-all duration-300 py-2 px-1 text-sm ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white'
                } ${activeSection === item.id ? (isScrolled ? 'text-blue-600 font-semibold' : 'text-white font-semibold') : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full ${
                    isScrolled ? 'bg-blue-500' : 'bg-white'
                  }`}></span>
                )}
              </li>
            ))}
          </ul>

          {/* Contact Button - Desktop */}
          <button
            onClick={() => scrollToSection("contact")}
            className={`hidden lg:block text-sm font-medium py-2 px-5 rounded-full transition-all duration-300 ${
              isScrolled
                ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md'
                : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 hover:scale-105'
            }`}
          >
            Contact Me
          </button>

          {/* Mobile Menu Button (Hamburger) */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`w-6 h-0.5 rounded-full transition-all duration-300 origin-center ${
              isScrolled || isMenuOpen ? 'bg-gray-800' : 'bg-white'
            } ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            
            <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
              isScrolled || isMenuOpen ? 'bg-gray-800' : 'bg-white'
            } ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            
            <span className={`w-6 h-0.5 rounded-full transition-all duration-300 origin-center ${
              isScrolled || isMenuOpen ? 'bg-gray-800' : 'bg-white'
            } ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Dark Background Blocker */}
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Dropdown Container Card */}
        <div className={`absolute top-24 right-4 w-64 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 transition-all duration-300 origin-top-right ${
          isMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}>
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`py-2.5 px-3.5 text-sm rounded-xl cursor-pointer transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-blue-50 text-blue-600 font-semibold'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}