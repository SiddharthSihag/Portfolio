import { useEffect, useRef } from 'react'
import photo from '../assets/photo.jpg'

export default function About() {
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
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <p className="section-label fade-in">About Me</p>
        <div className="about-grid">
          <div className="about-text fade-in fade-in-delay-1">
            <h2 className="section-title">Turning data into<br />decisions, ideas into code.</h2>
            <p>
              I'm a <span>Computer Science student at VIT Bhopal</span> with a passion for
              building systems that learn, adapt, and solve real problems. From AI meeting
              assistants to crop recommendation models, I love the full stack of building.
            </p>
            <p>
              My toolkit spans <span>MERN Stack, Machine Learning, and Data Science</span>.
              I've built full-stack apps, deployed ML models with 98%+ accuracy, integrated
              OpenAI APIs, and explored everything from CNN architectures to collaborative filtering.
            </p>
            <p>
              Outside of code, I'm involved with the <span>NSS Youth Parliament</span>, the
              Pahadi Club, and the Blockchain Club — always curious, always building.
            </p>
            <div className="about-links">
              <a href="mailto:sihagsiddharth9@gmail.com" className="about-link">✉ Email</a>
              <a href="https://github.com/SiddharthSihag" target="_blank" rel="noreferrer" className="about-link">⌥ GitHub</a>
              <a href="https://www.linkedin.com/in/siddharth-sihag-994233259/" target="_blank" rel="noreferrer" className="about-link">↗ LinkedIn</a>
            </div>
          </div>

          <div className="fade-in fade-in-delay-2">
            <div className="about-photo-wrap">
              <div className="about-photo-border" />
              <img src={photo} alt="Siddharth Sihag" className="about-photo" />
            </div>
            <div className="about-stats">
              <div className="stat-box">
                <div className="stat-value">4+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">98%</div>
                <div className="stat-label">Best Accuracy</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">4+</div>
                <div className="stat-label">Certifications</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">VIT</div>
                <div className="stat-label">University</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}