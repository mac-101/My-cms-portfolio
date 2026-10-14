import { useEffect, useRef, useState } from 'react'
import { getTechStacks } from '../api/portfolio'
import usePortfolioData from '../hooks/usePortfolioData'

const categories = [
  { id: 'languages', label: 'Languages' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend & Systems' },
  { id: 'design', label: 'Design & Product' },
  { id: 'other', label: 'Other' },
]

const PLACEHOLDER_EFFICIENCY = 80

function SkillLevel({ skill, efficiency, hasEfficiency }) {
  const [displayedEfficiency, setDisplayedEfficiency] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const frameId = window.requestAnimationFrame(() => setDisplayedEfficiency(efficiency))
      return () => window.cancelAnimationFrame(frameId)
    }

    let frameId
    let startTime
    const duration = 900

    const animate = (timestamp) => {
      if (startTime === undefined) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setDisplayedEfficiency(Math.round(efficiency * progress))

      if (progress < 1) frameId = window.requestAnimationFrame(animate)
    }

    frameId = window.requestAnimationFrame(animate)
    return () => window.cancelAnimationFrame(frameId)
  }, [efficiency])

  return (
    <li>
      <div className="mb-2 flex items-center justify-between gap-3 text-sm">
        <span className="text-gray-700">{skill.name}</span>
        <span className="shrink-0 text-gray-500">{displayedEfficiency}%</span>
      </div>
      <div
        role="progressbar"
        aria-label={`${skill.name} efficiency${hasEfficiency ? '' : ' (placeholder)'}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={displayedEfficiency}
        className="h-1 overflow-hidden rounded-full bg-gray-200"
      >
        <div
          className="h-full rounded-full bg-blue-600 transition-[width] duration-500"
          style={{ width: `${displayedEfficiency}%` }}
        />
      </div>
    </li>
  )
}

export default function Skills() {
  const { data: skills, loading, error } = usePortfolioData(getTechStacks)
  const sectionRef = useRef(null)
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    if (!('IntersectionObserver' in window)) {
      setHasEnteredViewport(true)
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasEnteredViewport(true)
        observer.disconnect()
      }
    }, { threshold: 0.1 })

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const hasCategories = skills.some((skill) =>
    categories.some((category) => category.id === skill.category),
  )

  const groupedSkills = categories
    .map((category) => ({
      ...category,
      skills: skills.filter((skill) => (skill.category || 'other') === category.id),
    }))
    .filter((category) => category.skills.length > 0)

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-80 bg-gray-50 px-4 py-16 font-sans sm:px-6 lg:px-8"
    >
      {hasEnteredViewport && (
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-4 border-t border-gray-200 pt-8">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 reveal" data-animation="pop-in">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Stack
          </div>
            <h2 className="text-2xl font-bold text-gray-900">Technical Skills</h2>
          </div>
          
        </div>

        {loading && (
          <div
            className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4"
            role="status"
            aria-label="Loading technical skills"
            aria-busy="true"
          >
            {Array.from({ length: 4 }, (_, index) => (
              <div key={index} aria-hidden="true" className="space-y-5 motion-safe:animate-pulse">
                <div className="h-4 w-28 rounded bg-gray-200" />
                {Array.from({ length: 3 }, (_, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="h-4 rounded bg-gray-200" />
                    <div className="h-1 rounded-full bg-gray-200" />
                  </div>
                ))}
              </div>
            ))}
            <span className="sr-only">Loading technical skills...</span>
          </div>
        )}
        {error && <p role="alert" className="text-red-600">{error}</p>}
        {!loading && !error && skills.length === 0 && (
          <p className="text-gray-600">No technologies are listed yet.</p>
        )}

        {!loading && !error && skills.length > 0 && (
          <>
            {hasCategories ? (
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                {groupedSkills.map((category) => (
                  <div key={category.id}>
                    <h3 className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-700">
                      <span className="h-0.5 w-5 bg-blue-600" />
                      {category.label}
                    </h3>
                    <ul className="space-y-5">
                      {category.skills.map((skill) => {
                        const hasEfficiency = typeof skill.efficiency === 'number'
                          && Number.isFinite(skill.efficiency)
                        const efficiency = Math.min(
                          100,
                          Math.max(0, hasEfficiency ? skill.efficiency : PLACEHOLDER_EFFICIENCY),
                        )

                        return (
                          <SkillLevel
                            key={skill.id}
                            skill={skill}
                            efficiency={efficiency}
                            hasEfficiency={hasEfficiency}
                          />
                        )
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
                {skills.map((skill) => {
                  const hasEfficiency = typeof skill.efficiency === 'number'
                    && Number.isFinite(skill.efficiency)
                  const efficiency = Math.min(
                    100,
                    Math.max(0, hasEfficiency ? skill.efficiency : PLACEHOLDER_EFFICIENCY),
                  )

                  return (
                    <SkillLevel
                      key={skill.id}
                      skill={skill}
                      efficiency={efficiency}
                      hasEfficiency={hasEfficiency}
                    />
                  )
                })}
              </ul>
            )}
           
          </>
        )}
      </div>
      )}
    </section>
  )
}
