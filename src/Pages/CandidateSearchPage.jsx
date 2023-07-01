import React, { useState, useEffect } from "react";
import "../Styles/CandidateSearchPage.css";

const CandidateSearchPage = () => {
  const [location, setLocation] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetchCandidates();
  }, [location, jobRole]);

  const fetchCandidates = () => {
    const url = `https://opentripmap-places-v1.p.rapidapi.com/%7Blang%7D/places/geoname?name=London=${location}&https://indeed-indeed.p.rapidapi.com/apisearch?publisher=%3CREQUIRED%3E&v=2&format=json&callback=%3CREQUIRED%3E&q=java&l=austin%2C%20tx&sort=%3CREQUIRED%3E&radius=25&st=%3CREQUIRED%3E&jt=%3CREQUIRED%3E&start=%3CREQUIRED%3E&limit=%3CREQUIRED%3E&fromage=%3CREQUIRED%3E&highlight=%3CREQUIRED%3E&filter=%3CREQUIRED%3E&latlong=%3CREQUIRED%3E&co=%3CREQUIRED%3E&chnl=%3CREQUIRED%3E&userip=%3CREQUIRED%3E&useragent=%3CREQUIRED%3E=${jobRole}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Update the candidates state with the fetched data
        setCandidates(data);
      })
      .catch((error) => {
        console.error("Error fetching candidates:", error);
      });
  };

  return (
    <div className="candidate-search-page">
      <div className="search-form-container">
        <h2>Candidate Search</h2>
        <form onSubmit={fetchCandidates}>
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Job Role"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
            required
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="candidate-list-container">
        <h3>Matching Candidates</h3>
        {candidates.length > 0 ? (
          <ul>
            {candidates.map((candidate) => (
              <li key={candidate.id}>
                <div>{candidate.name}</div>
                <div>{candidate.location}</div>
                <div>{candidate.jobRole}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No candidates found.</p>
        )}
      </div>
    </div>
  );
};

export default CandidateSearchPage;
