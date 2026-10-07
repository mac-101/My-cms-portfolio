import React from 'react'
import { Github, ArrowUpRight, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getProjects } from '../api/portfolio'
import usePortfolioData from '../hooks/usePortfolioData'

export default function Projects() {
  const { data: portfolioProjects, loading, error } = usePortfolioData(getProjects)
  const featuredProjects = portfolioProjects.filter((project) => project.isFeatured).slice(0, 4)

  return (
    <section id="projects" className="py-12 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work showcasing React, SaaS architecture, and Firebase applications.
          </p>
        </div>

        {loading && (
          <div
            className="grid grid-cols-1 md:grid-cols-4 gap-5"
            role="status"
            aria-label="Loading featured projects"
            aria-busy="true"
          >
            {Array.from({ length: 4 }, (_, index) => (
              <div
                key={index}
                aria-hidden="true"
                className="overflow-hidden rounded-xl border border-gray-200 bg-white animate-pulse"
              >
                <div className="h-40 bg-gray-100" />
                <div className="space-y-3 p-4">
                  <div className="h-4 w-2/3 rounded bg-gray-100" />
                  <div className="h-3 w-full rounded bg-gray-100" />
                  <div className="h-3 w-4/5 rounded bg-gray-100" />
                  <div className="flex gap-2 pt-2">
                    <div className="h-5 w-14 rounded bg-gray-100" />
                    <div className="h-5 w-16 rounded bg-gray-100" />
                    <div className="h-5 w-12 rounded bg-gray-100" />
                  </div>
                </div>
              </div>
            ))}
            <span className="sr-only">Loading featured projects...</span>
          </div>
        )}
        {error && <p role="alert" className="text-center text-red-600">{error}</p>}

        {!loading && !error && featuredProjects.length === 0 && (
          <p className="text-center text-gray-500">No featured projects are available yet.</p>
        )}

        {!loading && !error && featuredProjects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {featuredProjects.map((project) => {
            const liveUrl = project.link || '#'
            const githubUrl = project.github || '#'

            return (
              <div
                key={project.title}
                className="bg-white rounded-xl overflow-hidden border border-gray-200/80 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 flex flex-col group"
              >
                <div className="relative h-40 overflow-hidden bg-gray-100">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Eye className="w-8 h-8 text-gray-300" />
                    </div>
                  )}
                </div>

                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors mb-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-xs line-clamp-2 leading-relaxed mb-3">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1 mb-3.5">
                      {project.tags.map((tag, idx) => (
                        <span key={`${tag}-${idx}`} className="px-2 py-0.5 bg-gray-50 text-gray-500 text-[10px] font-medium rounded border border-gray-200/50">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2.5 border-t border-gray-100">
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        Live Demo <ArrowUpRight size={13} />
                      </a>
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 text-gray-400 hover:text-gray-700 transition-colors"
                      >
                        <Github size={15} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        )}

        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-700 mb-6 font-medium">Interested in more projects and collaborations?</p>

          <Link to="/projects" className="inline-block">
            <span className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all font-medium active:scale-95 cursor-pointer shadow-lg">
              See More Projects
            </span>
          </Link>
        </div>

        <div className="text-center mt-6 sm:hidden">
          <Link to="/projects" className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600">
            View All Archive <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}