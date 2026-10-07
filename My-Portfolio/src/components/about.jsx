import React from 'react'
import { User, MapPin, Briefcase, Download, Code2, Database, Smartphone, CheckCircle, Zap, Globe, Cpu } from 'lucide-react'
import { getResume } from '../api/portfolio'
import usePortfolioData from '../hooks/usePortfolioData'

export default function About() {
  const { data: resume, loading: resumeLoading, error: resumeError } = usePortfolioData(
    getResume,
  )

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Side: Content Section */}
          <div className="space-y-8 reveal" data-animation="fade-up">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold">
                <User className="w-4 h-4" />
                About Me
              </div>

              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Building Digital Experiences with <span className="text-blue-600">Precision & Passion</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                I'm <span className="font-semibold text-gray-900">Charles MacAnthony</span>, a Full Stack Developer based in Abia, Nigeria.
                With 2 years of hands-on experience, I bridge the gap between complex backend logic and
                intuitive frontend design. My goal is to build scalable, high-performance applications that
                solve real-world problems.
              </p>
            </div>

            {/* Quick Stats Grid */}
            {/* <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="p-4 border border-gray-100 rounded-xl bg-gray-50/50">
                                <div className="text-3xl font-bold text-blue-600 mb-1">20+</div>
                                <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Projects Completed</div>
                            </div>
                            <div className="p-4 border border-gray-100 rounded-xl bg-gray-50/50">
                                <div className="text-3xl font-bold text-blue-600 mb-1">2+</div>
                                <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Years Experience</div>
                            </div>
                        </div> */}

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">Based in Abia, Nigeria (Available for Remote)</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">Open to Full-time & Freelance Roles</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              {resumeLoading && (
                <div
                  role="status"
                  aria-label="Loading resume"
                  className="h-14 w-52 animate-pulse rounded-xl bg-blue-100"
                />
              )}
              {!resumeLoading && !resumeError && resume && (
                <a
                  href={resume.url}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-200 font-semibold"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              )}
              {!resumeLoading && resumeError && (
                <p role="status" className="text-sm text-gray-500">
                  Resume is currently unavailable.
                </p>
              )}
            </div>
          </div>

          {/* Right Side: What I Do Section */}
          <div className="grid grid-cols-1 gap-4 reveal" data-animation="fade-up">
            <h3 className="text-xl font-bold text-gray-900 mb-2">What I specialize in:</h3>

            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-4">
                <div className="mt-1"><Code2 className="w-6 h-6 text-blue-600" /></div>
                <div>
                  <h4 className="font-bold text-gray-900">Frontend Excellence</h4>
                  <p className="text-gray-600 text-sm mt-1">Crafting responsive, accessible, and lightning-fast user interfaces using React, Next.js, and Tailwind CSS.</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-4">
                <div className="mt-1"><Database className="w-6 h-6 text-blue-600" /></div>
                <div>
                  <h4 className="font-bold text-gray-900">Backend & Serverless</h4>
                  <p className="text-gray-600 text-sm mt-1">Designing secure authentication flows, managing real-time data streaming, database schemas and deploying serverless cloud functions with Python || Django.</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-4">
                <div className="mt-1"><Zap className="w-6 h-6 text-blue-600" /></div>
                <div>
                  <h4 className="font-bold text-gray-900">Performance Optimization</h4>
                  <p className="text-gray-600 text-sm mt-1">Ensuring smooth state management with Zustand and writing clean, maintainable code for long-term scalability.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}