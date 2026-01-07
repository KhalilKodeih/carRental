import React from "react";
import "./landpage.css";

const LandPage = () => {
  return (
    <div className="car-landing">
      {/* NAVBAR */}
      <header className="cl-nav">
        <div className="cl-container cl-nav-inner">
          <div className="cl-logo">DriveNow Rentals</div>
          <nav className="cl-nav-links">
            <a className="cl-btn cl-btn-outline" href="/login">
              Sign in
            </a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="cl-hero">
        <div className="cl-overlay" />
        <div className="cl-container cl-hero-inner">
          <div className="cl-hero-text">
            <h1>Need a car today?</h1>
            <p>
              Book a reliable rental in minutes. Choose from economy, SUV, or
              luxury cars with 24/7 support and flexible pickup options.
            </p>
            <a className="cl-btn cl-btn-primary" href="/cars">
              Book your car now
            </a>
          </div>
          <div className="cl-hero-card">
            <h2>Pick up &amp; go</h2>
            <p>
              Reserve online and pick up your car at any of our city locations.
              No hidden fees, no surprises.
            </p>
            <ul>
              <li>✔ Free cancellation up to 24h</li>
              <li>✔ Unlimited mileage options</li>
              <li>✔ Insurance available</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="cl-section cl-features">
        <div className="cl-container cl-features-grid">
          <div className="cl-feature">
            <div className="cl-feature-icon">🚗</div>
            <h3>Wide car selection</h3>
            <p>
              From compact city cars to family SUVs and premium sedans, find a
              car that fits your trip.
            </p>
          </div>
          <div className="cl-feature">
            <div className="cl-feature-icon">⚡</div>
            <h3>Instant confirmation</h3>
            <p>
              Book online and receive your confirmation and pickup details in
              seconds.
            </p>
          </div>
          <div className="cl-feature">
            <div className="cl-feature-icon">💳</div>
            <h3>No hidden charges</h3>
            <p>
              Clear pricing with taxes and basic fees included before you pay.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="cl-section cl-steps">
        <div className="cl-container">
          <h2>This is how it works</h2>
          <p className="cl-section-subtitle">
            Renting a car with us takes just three simple steps.
          </p>

          <div className="cl-steps-timeline">
            <div className="cl-step">
              <div className="cl-step-circle">1</div>
              <h4>Choose your dates</h4>
              <p>
                Select pickup &amp; drop-off dates and your preferred location.
              </p>
            </div>
            <div className="cl-step">
              <div className="cl-step-circle">2</div>
              <h4>Select your car</h4>
              <p>
                Browse available cars, compare options, and pick your favorite.
              </p>
            </div>
            <div className="cl-step">
              <div className="cl-step-circle">3</div>
              <h4>Pick up &amp; drive</h4>
              <p>Show your ID, grab the keys, and hit the road in minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FIND THE RIGHT CAR */}
      <section id="cars" className="cl-section cl-cta">
        <div className="cl-container cl-cta-inner">
          <div>
            <h2>Find the right car for you</h2>
            <p>
              Tell us where and when you need a car, and we’ll show you the best
              offers from our fleet.
            </p>
          </div>
          <a className="cl-btn cl-btn-primary" href="/cars">
            Check availability
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="about" className="cl-footer">
        <div className="cl-container cl-footer-grid">
          <div>
            <h4>DriveNow Rentals</h4>
            <p>
              Fast and flexible car rentals with locations across the city. Book
              online and drive away today.
            </p>
          </div>
          <div>
            <h5>Support</h5>
            <ul>
              <li>
                <a href="#!">Help center</a>
              </li>
              <li>
                <a href="#!">Contact us</a>
              </li>
              <li>
                <a href="#!">FAQ</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li>
                <a href="#!">About</a>
              </li>
              <li>
                <a href="#!">Terms</a>
              </li>
              <li>
                <a href="#!">Privacy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="cl-footer-bottom">
          © {new Date().getFullYear()} DriveNow Rentals. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandPage;
