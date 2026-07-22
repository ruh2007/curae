import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <p className="footer-logo">CURAÉ</p>
          <p className="footer-tagline">Home, the way you imagined it.</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Shop</h3>
            <Link to="/">Home</Link>
            <Link to="/new-selection">New Selection</Link>
            <Link to="/shop">Shop More</Link>
          </div>

          <div className="footer-column">
            <h3>Company</h3>
            <Link to="/about">About Us</Link>
            <Link to="/signup">Create Account</Link>
            <Link to="/login">Log In</Link>
          </div>

          <div className="footer-column">
            <h3>Get in touch</h3>
            <a href="mailto:hello@curae.com">hello@curae.com</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Curaé. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer