import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header>
        <h1>
          Welcome to the <span>Digital Recruitment Solution</span>
        </h1>
        <p>Efficiently find and hire top talent</p>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Streamline Your Hiring Process</h2>
          <p>
            Our online recruitment solution simplifies and automates the hiring
            process, saving you time and effort.
          </p>
        </div>
        <div className="feature">
          <h2>Access a Large Pool of Candidates</h2>
          <p>
            Tap into our extensive database of qualified candidates to find the
            perfect fit for your organization.
          </p>
        </div>
        <div className="feature">
          <h2>Efficient Collaboration</h2>
          <p>
            Collaborate seamlessly with your team members, share candidate
            profiles, and streamline communication.
          </p>
        </div>
      </section>
      <section className="cta">
        <h2>Ready to get started?</h2>
        <div className="cta-buttons">
          <Link to="/LoginPage" className="cta-button">
            User Login
          </Link>
          <Link to="/CandidateSearchPage" className="cta-button">
            Search Candidates
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
