import { useEffect, useRef } from 'react'

const certifications = [
  { icon: '☁️', name: 'NPTEL Cloud Computing', issuer: 'NPTEL — Elite Silver' },
  { icon: '🤖', name: 'Machine Learning',       issuer: 'Coursera' },
  { icon: '☕', name: 'Java Foundation',         issuer: 'Oracle' },
  { icon: '📊', name: 'Data Science',            issuer: 'Oracle' },
]

const activities = [
  { icon: '🏛️', name: 'NSS Youth Parliament', issuer: 'Leadership' },
  { icon: '⛰️', name: 'Pahadi Club',          issuer: 'Core Member' },
  { icon: '⛓️', name: 'Blockchain Club',       issuer: 'Member' },
]

export default function Certifications() {
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
    <section id="certifications" className="section" ref={ref}>
      <div className="container">
        <p className="section-label fade-in">Credentials</p>
        <h2 className="section-title fade-in fade-in-delay-1">Certifications & Activities</h2>

        <p style={{ color:'var(--text-muted)', marginBottom:'28px', fontFamily:'var(--font-mono)', fontSize:'0.82rem' }}
          className="fade-in fade-in-delay-1">
          // Certifications
        </p>
        <div className="cert-grid fade-in fade-in-delay-2">
          {certifications.map(c => (
            <div className="cert-card" key={c.name}>
              <span className="cert-icon">{c.icon}</span>
              <div>
                <p className="cert-name">{c.name}</p>
                <p className="cert-issuer">{c.issuer}</p>
              </div>
            </div>
          ))}
        </div>

        <p style={{ color:'var(--text-muted)', margin:'40px 0 28px', fontFamily:'var(--font-mono)', fontSize:'0.82rem' }}
          className="fade-in">
          // Leadership & Extracurriculars
        </p>
        <div className="cert-grid fade-in fade-in-delay-1">
          {activities.map(a => (
            <div className="cert-card" key={a.name}>
              <span className="cert-icon">{a.icon}</span>
              <div>
                <p className="cert-name">{a.name}</p>
                <p className="cert-issuer">{a.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}