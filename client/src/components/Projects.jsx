import { useEffect, useRef } from 'react'

const projects = [
  {
    icon: '🧠',
    title: 'MeetMind – AI Minutes Generator',
    desc: 'Full-stack MERN app that automates converting raw meeting audio into structured Minutes of Meeting. Integrates OpenAI Whisper for high-fidelity speech-to-text and GPT-4o to extract action items, attendees, and key decisions. Scalable Node.js/Express API with MongoDB storage and React frontend.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI Whisper', 'GPT-4o'],
    featured: false,
  },
  {
    icon: '🌾',
    title: 'Crop Recommendation System',
    desc: 'A predictive ML model using Random Forest and Decision Trees to forecast optimal crops based on environmental factors. Pre-processed 50,000+ data points. Deployed via Flask with real-time recommendations, reducing farmer decision time by 40%.',
    tags: ['Python', 'Random Forest', 'Flask', 'Machine Learning'],
    featured: false,
  },
  {
    icon: '🎵',
    title: 'Tune Souls – Music Recommender',
    desc: 'Real-time music recommendation app integrating OpenCV and CNN to detect facial expressions. Trained on 10,000+ facial images with 88% emotion classification accuracy. Dynamic song suggestion engine boosted user engagement by 40%.',
    tags: ['Python', 'OpenCV', 'CNN', 'Deep Learning'],
    featured: false,
  },
  {
    icon: '📚',
    title: 'Dream Reads – Book Recommender',
    desc: 'Book recommendation system using Nearest Neighbors collaborative filtering, boosting accuracy by 25%. Interactive HTML/JS frontend reduced page load time by 20% and increased user engagement by 35%.',
    tags: ['HTML', 'JavaScript', 'Collaborative Filtering', 'Python'],
    featured: false,
  },
]

export default function Projects() {
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
    <section id="projects" className="section" ref={ref} style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <p className="section-label fade-in">Projects</p>
        <h2 className="section-title fade-in fade-in-delay-1">Things I've built</h2>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`project-card fade-in fade-in-delay-${Math.min(i + 1, 4)} ${p.featured ? 'featured' : ''}`}
            >
              <div className="project-top">
                <div className="project-icon">{p.icon}</div>
                <span className="project-date">{p.date}</span>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map(t => (
                  <span key={t} className="project-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}