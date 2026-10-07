import React from 'react'

export default function CallToAction({
  heading = "Ready to start something new?",
  subtext = "Open for collaborations on Healthcare, Fintech, and Real-time application systems.",
  whatsappNumber = "2349161489807",
  buttonLabel = "Drop a message",
}) {
  return (
    <div
      className="reveal mt-20 p-12 bg-slate-900 rounded-[3rem] text-center"
      data-animation="zoom-in"
    >
      <h4 className="text-white text-2xl font-black uppercase mb-4 tracking-tighter">
        {heading}
      </h4>
      <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto">{subtext}</p>
      <button
        onClick={() => window.open(`https://wa.me/${whatsappNumber}`, "_blank")}
        className="px-10 py-4 bg-blue-600 text-white font-black uppercase text-xs tracking-widest rounded-2xl hover:bg-white hover:text-slate-900 transition-all"
      >
        {buttonLabel}
      </button>
    </div>
  )
}
