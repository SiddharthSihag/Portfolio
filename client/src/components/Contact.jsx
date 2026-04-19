import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

export default function Contact() {
  const ref = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [msg, setMsg] = useState('')

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

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    try {
      const API = import.meta.env.VITE_API_URL || ''
      const res = await axios.post(`${API}/api/contact`, form)
      setStatus('success')
      setMsg(res.data.message)
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
      setMsg(err.response?.data?.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-2)' }} ref={ref}>
      <div className="container">
        <p className="section-label fade-in">Contact</p>
        <h2 className="section-title fade-in fade-in-delay-1">Let's connect</h2>

        <div className="contact-grid">
          <div className="fade-in fade-in-delay-2">
            <h3>Get in touch</h3>
            <p>
              I'm open to internship opportunities, collaboration on interesting projects,
              or just a good tech conversation. Drop me a message!
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail-icon">✉</div>
                <span>sihagsiddharth9@gmail.com</span>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">📍</div>
                <span>VIT Bhopal, India</span>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">📞</div>
                <span>+91-7206044339</span>
              </div>
            </div>
          </div>

          <form className="contact-form fade-in fade-in-delay-3" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Name</label>
              <input
                id="name" name="name" type="text" className="form-input"
                placeholder="Your name" value={form.name}
                onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                id="email" name="email" type="email" className="form-input"
                placeholder="your@email.com" value={form.email}
                onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                id="message" name="message" className="form-textarea"
                placeholder="Hi Siddharth, I'd love to..." value={form.message}
                onChange={handleChange} required
              />
            </div>
            {status && status !== 'loading' && (
              <div className={`form-status ${status}`}>{msg}</div>
            )}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === 'loading'}
              style={{ alignSelf: 'flex-start' }}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}