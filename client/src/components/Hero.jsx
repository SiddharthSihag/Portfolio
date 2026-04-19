export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-grid-bg" />
      <div className="hero-glow" />
      <div className="hero-glow-2" />

      <div className="container">
        <div className="hero-content">
          <p className="hero-greeting">// I'm</p>
          <h1 className="hero-name">
            Siddharth<br />
            <span className="hero-name-accent">Sihag</span>
          </h1>
          <p className="hero-role">Software Developer & Data Scientist</p>
          <p className="hero-desc">
            B.Tech CSE student at VIT Bhopal, building intelligent systems at the
            intersection of Machine Learning, Full-Stack Development, and Data Science.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View Projects →</a>
            <a
              href="https://www.linkedin.com/in/siddharth-sihag-994233259/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}