import { useEffect, useRef } from 'react'

const experiences = [
  {
    company: 'Unified Mentor',
    role: 'Data Science Intern',
    period: 'Oct 2025 – Jan 2026',
    type: 'Remote',
    bullets: [
      'Executed 4 end-to-end data science projects managing the full pipeline from Data Cleaning and EDA to Visualization and ML model deployment.',
      'Tobacco Mortality Prediction — engineered a Random Forest Regressor integrating 5 complex datasets, achieving an R² Score of 0.99.',
      'Netflix Analysis — analyzed 8,800+ titles using Python, visualizing a 70% dominance of movies over TV shows to guide content strategy.',
      'HR Analytics — investigated a 16% employee attrition rate, pinpointing commute distance and income disparity as primary turnover drivers.',
      'Clinical Trials EDA — time-series analysis on 5,700+ global COVID-19 clinical trials to map research surges and extract actionable insights.',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="container">
        <p className="section-label fade-in">Experience</p>
        <h2 className="section-title fade-in fade-in-delay-1">Where I've worked</h2>
        <div className="timeline fade-in fade-in-delay-2">
          {experiences.map(exp => (
            <div className="timeline-item" key={exp.company}>
              <div className="timeline-meta">
                <span className="timeline-company">{exp.company}</span>
                <span className="timeline-period">{exp.period}</span>
              </div>
              <p className="timeline-role">{exp.role} · {exp.type}</p>
              <ul className="timeline-bullets">
                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}