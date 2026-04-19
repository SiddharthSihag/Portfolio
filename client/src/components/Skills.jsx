import { useEffect, useRef } from 'react'

const skillData = [
  {
    category: 'Languages',
    skills: ['C++', 'Java', 'Python', 'JavaScript', 'SQL', 'MATLAB'],
  },
  {
    category: 'Frameworks & Technologies',
    skills: ['React', 'Node.js', 'Express', 'Flask', 'Machine Learning', 'Deep Learning', 'OpenCV', 'CNN', 'HTML', 'CSS'],
  },
  {
    category: 'Tools & Databases',
    skills: ['MongoDB', 'MySQL', 'Git', 'GitHub', 'VS Code', 'Jupyter', 'Pandas', 'NumPy', 'Scikit-learn'],
  },
  {
    category: 'Core Concepts',
    skills: ['Data Structures', 'Algorithms', 'DBMS', 'EDA', 'Data Visualization', 'Random Forest', 'Collaborative Filtering', 'REST APIs'],
  },
]

export default function Skills() {
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
    <section id="skills" className="section" ref={ref} style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <p className="section-label fade-in">Technical Skills</p>
        <h2 className="section-title fade-in fade-in-delay-1">What I work with</h2>
        <div className="skills-categories fade-in fade-in-delay-2">
          {skillData.map(cat => (
            <div key={cat.category}>
              <p className="skill-category-label">{cat.category}</p>
              <div className="skill-tags">
                {cat.skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}