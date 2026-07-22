import React from 'react'
import { useNavigate } from 'react-router-dom'
import Autoscroll from './Autoscroll.jsx'

function Home() {
  const navigate = useNavigate()

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div>
            <p className="hero-eyebrow">New season edit</p>
            <h1 className="hero-heading">
              Home, the way
              <br />
              you imagined it
            </h1>
            <p className="hero-subtext">
              Thoughtfully designed furniture and décor for every room,
              every budget, every story.
            </p>
            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() => navigate('/signup')}
              >
                Shop the collection
              </button>
              <button className="btn-secondary">Take the style quiz</button>
            </div>
          </div>
        </div>
      </section>

      <Autoscroll />
    </>
  )
}

export default Home