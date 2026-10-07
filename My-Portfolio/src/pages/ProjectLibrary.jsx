import React, { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getProjects } from '../api/portfolio'
import CallToAction from '../components/CallToAction'
import ProjectCard from '../components/ProjectCard'
import usePortfolioData from '../hooks/usePortfolioData'

export default function ProjectLibrary() {
  const navigate = useNavigate()
  const pathname = useLocation()
  const { data: projects, loading, error } = usePortfolioData(getProjects)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <section id="library" className="py-20 px-4 bg-[#fafafa] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 reveal" data-animation="fade-up">
          <button
            onClick={() => navigate('/')}
            className="flex cursor-pointer items-center gap-2 mb-4"
          >
            <ArrowLeft className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-black uppercase tracking-widest text-blue-600">
              Back
            </span>
          </button>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase">
            Build <span className="text-slate-400 font-medium italic">Archive</span>
          </h2>
          <p className="pt-2">
            {loading ? 'Loading projects...' : `${projects.length} Projects`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading && (
            <div
              className="col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              role="status"
              aria-label="Loading projects"
              aria-busy="true"
            >
              {Array.from({ length: 6 }, (_, index) => (
                <div
                  key={index}
                  aria-hidden="true"
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white animate-pulse"
                >
                  <div className="aspect-[16/10] bg-slate-100" />
                  <div className="space-y-4 p-8">
                    <div className="h-5 w-2/3 rounded bg-slate-100" />
                    <div className="h-3 w-full rounded bg-slate-100" />
                    <div className="h-3 w-5/6 rounded bg-slate-100" />
                    <div className="flex gap-2 border-t border-slate-100 pt-6">
                      <div className="h-5 w-14 rounded bg-slate-100" />
                      <div className="h-5 w-16 rounded bg-slate-100" />
                      <div className="h-5 w-12 rounded bg-slate-100" />
                    </div>
                  </div>
                </div>
              ))}
              <span className="sr-only">Loading projects...</span>
            </div>
          )}
          {error && (
            <p role="alert" className="col-span-full text-center text-red-600">
              {error}
            </p>
          )}
          {!loading && !error && projects.length === 0 && (
            <p className="col-span-full text-center text-slate-500">
              No projects are available yet.
            </p>
          )}
          {!loading && !error && projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={(index % 3) * 0.15}
            />
          ))}
        </div>

        <CallToAction />
      </div>
    </section>
  )
}
