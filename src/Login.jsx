import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Auth.css'

function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: connect to your real login logic / API here
    console.log('Login data:', form)
    navigate('/')
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <p className="auth-eyebrow">Welcome back</p>
        <h1 className="auth-heading">Log in to Curaé</h1>
        <p className="auth-subtext">
          Pick up where you left off — your saved pieces are waiting.
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
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
            Log in
          </button>
        </form>

        <p className="auth-switch">
          New to Curaé? <Link to="/signup">Create an account</Link>
        </p>
      </div>
    </section>
  )
}

export default Login