import React from "react";
import "./Education.css";

const educationDetails = [
{
number: "01",
degree: "Bachelor of Technology",
field: "Computer Science and Engineering",
institution: "Sri Vasavi Institute of Engineering and Technology",
location: "Nandamuru, Andhra Pradesh",
duration: "2022 – 2026",
score: "8.5 CGPA",
icon: "⌘",
},
{
number: "02",
degree: "Intermediate",
field: "MPC",
institution: "Sri Chaitanya Junior College",
location: "Andhra Pradesh",
duration: "2020 – 2022",
score: "8.4 CGPA",
icon: "▤",
},
{
number: "03",
degree: "SSC",
field: "Secondary School Certificate",
institution: "Sahayamatha English Medium High School",
location: "Mudinepalli, Andhra Pradesh",
duration: "2020",
score: "9.7 CGPA",
icon: "✧",
},
];

function Education() {
return (
<section className="education-section" id="education">
<div className="education-container">
<div className="education-heading">
<span className="education-eyebrow">MY ACADEMIC JOURNEY</span>

      <h2>
        Education <span>&amp; Learning</span>
      </h2>

      <p>
        My academic journey has helped me build a strong foundation
        in computer science, programming, and problem-solving.
      </p>
    </div>

    <div className="education-timeline">
      {educationDetails.map((item, index) => (
        <article className="education-card" key={item.number}>
          <div className="education-timeline-marker">
            <span>{item.number}</span>
            {index !== educationDetails.length - 1 && (
              <div className="education-timeline-line"></div>
            )}
          </div>

          <div className="education-card-content">
            <div className="education-icon">{item.icon}</div>

            <div className="education-details">
              <div className="education-card-top">
                <span className="education-label">
                  {index === 0
                    ? "UNDERGRADUATE"
                    : index === 1
                    ? "HIGHER SECONDARY"
                    : "SECONDARY EDUCATION"}
                </span>

                <span className="education-duration">
                  {item.duration}
                </span>
              </div>

              <h3>{item.degree}</h3>
              <h4>{item.field}</h4>

              <p className="education-institution">
                {item.institution}
              </p>

              <p className="education-location">
                <span>⌖</span> {item.location}
              </p>

              <div className="education-card-bottom">
                <span className="education-score-label">
                  Academic Performance
                </span>

                <span className="education-score">{item.score}</span>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>

    <div className="education-footer">
      <span className="education-footer-dot"></span>
      <p>Learning today, building a better tomorrow.</p>
    </div>
  </div>
</section>

);
}

export default Education;