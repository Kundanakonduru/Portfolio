import React from "react";
import "./Achievements.css";

const achievements = [
{
number: "01",
category: "GENERATIVE AI",
title: "Cloud Generative AI",
organization: "AWS Academy",
description:
"Gained foundational knowledge of Generative AI concepts, Large Language Models (LLMs), and AI applications.",
icon: "✧",
accent: "blue",
},
{
number: "02",
category: "ARTIFICIAL INTELLIGENCE",
title: "AI-ML Certification",
organization: "Edu Skills",
description:
"Developed foundational knowledge of Artificial Intelligence, Machine Learning concepts, algorithms, and applications.",
icon: "⌘",
accent: "purple",
},
{
number: "03",
category: "WEB DEVELOPMENT",
title: "Python Web Developer",
organization: "Infosys Foundation",
description:
"Completed Python web development learning focused on building web applications and strengthening programming skills.",
icon: "⌘",
accent: "teal",
},
];

function Achievements() {
return (
<section className="achievements-section" id="achievements">
<div className="achievements-container">

    {/* SECTION HEADING */}
    <div className="achievements-heading">
      <span className="achievements-eyebrow">
        MILESTONES & CERTIFICATIONS
      </span>

      <h2>
        Achievements <span>&amp; Certifications</span>
      </h2>

      <p>
        Recognizing my continuous learning journey through certifications
        in Generative AI, Machine Learning, and Python web development.
      </p>
    </div>

    {/* CERTIFICATION CARDS */}
    <div className="achievements-grid">
      {achievements.map((item) => (
        <article
          className={`achievement-card ${item.accent}`}
          key={item.number}
        >
          <div className="achievement-card-top">
            <span className="achievement-number">
              {item.number}
            </span>

            <div className="achievement-icon" aria-hidden="true">
              {item.icon}
            </div>
          </div>

          <span className="achievement-category">
            {item.category}
          </span>

          <h3>{item.title}</h3>

          <div className="achievement-organization">
            <span className="organization-dot"></span>
            {item.organization}
          </div>

          <p className="achievement-description">
            {item.description}
          </p>

          <div className="achievement-card-bottom">
            <span className="achievement-verified">
              <span>✓</span> Certification
            </span>

            <span className="achievement-star" aria-hidden="true">
              ✦
            </span>
          </div>
        </article>
      ))}
    </div>

    {/* FOOTER */}
    <div className="achievements-footer">
      <span className="achievements-footer-line"></span>
      <p>Committed to continuous learning and professional growth.</p>
      <span className="achievements-footer-line"></span>
    </div>

  </div>
</section>

);
}

export default Achievements;