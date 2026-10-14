import { Github, Linkedin } from "lucide-react";
import pic from "../assets/me.png";

export default function Hero() {
  const socials = [
    {
      icon: <Github className="h-5 w-5" />,
      name: "GitHub",
      link: "https://github.com/mac-101",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/macanthony-charles-561810367",
    },
  ];

  const handleViewPortfolio = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleHireMe = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="flex min-h-dvh items-end bg-white px-4 pb-16 pt-28 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div className="flex flex-col items-start">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 reveal" data-animation="pop-in">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Available for work
          </div>

          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl reveal" data-animation="fade-right">
            <span className="text-blue-600">Hi!</span> 
            <br />
            I&apos;m Charles MacAnthony.
          </h1>
          <h2 className="mt-4 text-2xl font-semibold text-gray-700 sm:text-3xl reveal" data-animation="fade-up" data-delay="0.1s">
            I build{" "}
            <span className="text-blue-600">impactful websites</span> and
            digital experiences.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 reveal" data-animation="fade-up" data-delay="0.2s">
            I help individuals and businesses turn ideas into modern,
            responsive, and high-performance web experiences using today&apos;s
            best technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 reveal" data-animation="fade-up" data-delay="0.3s">
            <button
              onClick={handleViewPortfolio}
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              View Projects <span aria-hidden="true">→</span>
            </button>
            <button
              onClick={handleHireMe}
              className="rounded-xl border border-gray-200 px-6 py-3 font-semibold text-gray-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Contact Me
            </button>
          </div>

          <div className="mt-8 flex items-center gap-3 reveal" data-animation="fade-up" data-delay="0.4s">
            {socials.map((social, index) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="rounded-full border border-gray-200 p-3 text-gray-600 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 reveal"
                data-animation="pop-in"
                data-delay={`${0.45 + index * 0.1}s`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-6 border-t border-gray-100 pt-6 reveal" data-animation="fade-up" data-delay="0.55s">
            <div>
              <span className="text-2xl font-bold text-gray-900">2+</span>
              <p className="mt-1 text-sm text-gray-600">Years experience</p>
            </div>
            <div className="h-10 w-px bg-gray-200" />
            <div>
              <span className="text-2xl font-bold text-gray-900">10+</span>
              <p className="mt-1 text-sm text-gray-600">Projects completed</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-md reveal" data-animation="fade-in" data-delay="0.25s">
          {/* <div className="absolute inset-6 rounded-full bg-blue-100/70 blur-3xl" /> */}
          <div className="relative aspect-5/5 overflow-hidden border-blue-100 bg-gray-50 shadow-xl">
            <img
              src={pic}
              alt="Charles MacAnthony"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
