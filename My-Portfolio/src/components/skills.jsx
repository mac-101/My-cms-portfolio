import React from 'react'
import { Code2 } from 'lucide-react'
import { getTechStacks } from '../api/portfolio'
import usePortfolioData from '../hooks/usePortfolioData'

export default function Skills() {
  const { data: skills, loading, error } = usePortfolioData(getTechStacks)

  return (
    <section id="skills" className="py-12 px-4">
      <div className="max-w-5xl mx-auto border-t border-gray-800 pt-8">
        <div className="flex items-center gap-4 mb-7">
          <div>
            <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-1">
              My Stack
            </p>
            <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent" />
        </div>

        {loading && (
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
            role="status"
            aria-label="Loading technical skills"
            aria-busy="true"
          >
            {Array.from({ length: 8 }, (_, index) => (
              <div
                key={index}
                aria-hidden="true"
                className="flex items-center gap-2.5 p-3.5 rounded-xl bg-gray-900/50 border border-gray-800 animate-pulse"
              >
                <div className="w-8 h-8 rounded-lg bg-gray-800" />
                <div className="h-3 w-20 rounded bg-gray-800" />
              </div>
            ))}
            <span className="sr-only">Loading technical skills...</span>
          </div>
        )}
        {error && <p role="alert" className="text-red-400">{error}</p>}
        {!loading && !error && skills.length === 0 && (
          <p className="text-gray-400">No technologies are listed yet.</p>
        )}

        {!loading && !error && skills.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="reveal group p-3.5 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/40 hover:bg-gray-900 transition-all duration-300"
                data-animation="pop-in"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Code2 size={18} />
                  </div>
                  <span className="text-xs font-semibold text-gray-200">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
