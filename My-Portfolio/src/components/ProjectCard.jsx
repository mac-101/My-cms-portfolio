import React from 'react'
import { Github, Globe } from 'lucide-react'

export default function ProjectCard({ project, delay = 0 }) {
  const { title, category, description, tags, image, link, github } = project

  return (
    <div
      className="reveal group flex flex-col bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
      data-animation="rotate-up"
      data-delay={`${delay}s`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="h-full w-full" />
        )}
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[9px] font-black uppercase tracking-widest text-slate-900">
            {category}
          </span>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tighter">
            {title}
          </h3>
          <div className="flex gap-2">
            <a
              href={github || '#'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} on GitHub`}
              className="p-2 text-slate-400 hover:text-slate-900 transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} live site`}
              className="p-2 text-slate-400 hover:text-blue-600 transition-colors"
            >
              <Globe size={18} />
            </a>
          </div>
        </div>

        <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
          {description}
        </p>

        <div className="mt-auto pt-6 border-t border-slate-50 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] font-bold text-slate-400 uppercase tracking-widest border border-slate-200 px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
