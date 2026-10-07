import React, { useEffect, useState } from "react";
import pic from "../assets/me.png";
import pic2 from "../assets/pic-6.jpeg";
import { Github, Linkedin } from 'lucide-react'


export default function Hero() {
  const roles = [
    "Web Developer",
    "Fullstack Developer",
    "Python Developer",
    "React Developer",
    "UI/UX Focused Builder",
    "System Focused Builder"
  ];

  const socials = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      link: "https://github.com/mac-101",
      color: "bg-gray-900  hover:bg-gray-800",
      username: "@yourusername"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      link: "www.linkedin.com/in/macanthony-charles-561810367",
      color: "bg-blue-700 hover:bg-blue-600",
      username: "Charles MacAnthony"
    },
    
  ]
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleViewPortfolio = () => {
    const portfolioSection = document.getElementById("services");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHireMe = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      className="relative min-h-dvh flex items-center justify-center overflow-hidden "
    >
      {/* Background */}
      <div className="fixed inset-0 -z-40">
        <div
          className="w-full h-full animate__backInDown"
          style={{
            backgroundImage: `url(${pic2})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-12 py-30 items-center ">
          {/* Text */}
          <div className="flex flex-col space-y-8 pt-15 text-white animate-fade-in reveal" data-animation="fade-right">

            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                I'm{" "}
                <span className="font-serif text-blue-300">
                  Dev MacAnthony
                </span>
              </h1>

              {/* Animated Role */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-purple-300 transition-all duration-500">
                {roles[currentRole]}
              </h2>

              <p className="text-gray-200 pt-5 max-w-xl text-lg leading-relaxed">
                I help individuals and businesses turn ideas into modern,
                responsive, and high-performance web experiences using today’s
                best technologies.
              </p>

              <div>
                <h3 className="font-medium text-gray-900 mb-3">Connect</h3>
                <div className="flex gap-4">
                  {socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg ${social.color} transition-colors reveal`}
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

            {/* Buttons */}
            {/* <div className="flex flex-wrap gap-4">
              <button
                onClick={handleViewPortfolio}
                className="px-8 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-blue-500/30"
              >
                View My Portfolio
              </button>

              <button
                onClick={handleHireMe}
                className="px-8 py-3 text-lg font-semibold bg-transparent border-2 border-white hover:bg-white/10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Hire Me
              </button>
            </div> */}

            {/* Stats */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">2+</span>
                <span className="text-gray-300">Years Experience</span>
              </div>

              <div className="h-6 w-px bg-gray-400" />

              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">10+</span>
                <span className="text-gray-300">Projects Completed</span>
              </div>
            </div>
          </div>

          {/* Image */}
         <div className="relative hidden lg:flex justify-center reveal" data-animation="rotate-up" data-delay="0.5">
            <div className="relative w-60 h-70 sm:w-70 sm:h-90 lg:w-150 lg:h-110  overflow-hidden shadow-2xl">
              <img
                src={pic}
                alt="Charles MacAnthony"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-purple-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div> 

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </div >
  );
}
