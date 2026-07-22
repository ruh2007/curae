import React from 'react'
import Footer from './Footer.jsx'

function About() {
  return (
    <>
      <section className="about-page">
        <div className="about-inner">
          <p className="hero-eyebrow">Our story</p>
          <h1 className="about-heading">Designed around how you actually live</h1>
          <p className="about-lead">
            Curaé started with a simple frustration: furniture shopping felt like
            choosing between mass-produced pieces with no soul, or designer pieces
            with no budget. We wanted a middle path.
          </p>

          <div className="about-grid">
            <div className="about-block">
              <h2>What we believe</h2>
              <p>
                A home should be curated, not collected at random. Every piece we
                select is chosen for how it lives day to day, not just how it
                photographs.
              </p>
            </div>

            <div className="about-block">
              <h2>How we work</h2>
              <p>
                We partner with independent makers and small studios, favoring
                craftsmanship and honest materials over trend cycles.
              </p>
            </div>

            <div className="about-block">
              <h2>Where we're headed</h2>
              <p>
                We're building toward a fuller catalog across every room, every
                budget, and every stage of life &mdash; one thoughtful piece at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default About