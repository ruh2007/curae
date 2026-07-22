import { useState } from "react"
import { Link } from "react-router-dom"
import "./App.css"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleMenu() {
    setIsOpen((prev) => !prev)
  }

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
         CURAÉ
        </NavLink>

        <div className="navbar-links">
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={closeMenu}>
            About Us
          </NavLink>
          <NavLink to="/new-selection" onClick={closeMenu}>
            New Selection
          </NavLink>
          <NavLink to="/shop" onClick={closeMenu}>
            Shop More
          </NavLink>
        </div>

        <button
          className={`hamburger-btn ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-menu-links">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About Us</Link>
          <Link to="/new-selection" onClick={closeMenu}>New Selection</Link>
          <Link to="/shop" onClick={closeMenu}>Shop More</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar