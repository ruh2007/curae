import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Auth.css'

function Signup() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Save to localStorage (placeholder for real signup logic / API)
    try {
      localStorage.setItem('userData', JSON.stringify(form))
      console.log('Form Submitted:', form)
    } catch (err) {
      console.error('Failed to save user data:', err)
    }

    // Navigate to home (or wherever appropriate)
    navigate('/')
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <p className="auth-eyebrow">Join Curaé</p>
        <h1 className="auth-heading">Create your account</h1>
        <p className="auth-subtext">
          Sign up to save favorites, track orders, and get early access to new collections.
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Full name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className="btn-primary auth-submit">
            Create account
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </section>
  )
}

export default Signup