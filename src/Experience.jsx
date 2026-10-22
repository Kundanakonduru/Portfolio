import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">

        {/* SECTION HEADING */}
        <div className="experience-heading">
          <span className="experience-eyebrow">
            MY PROFESSIONAL JOURNEY
          </span>

          <h2>
            Work <span>Experience</span>
          </h2>

          <p>
            My experience working with AI technologies and developing
            practical technical skills.
          </p>
        </div>

        {/* EXPERIENCE CARD */}
        <article className="experience-card">

          {/* LEFT: COMPANY LOGO / IMAGE */}
          <div className="experience-company-visual">
            <div className="experience-logo-frame">
              <img
                src="/ethara-logo.png"
                alt="Ethara.ai company logo"
                className="experience-company-logo"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                  event.currentTarget.nextElementSibling.style.display = "flex";
                }}
              />

              <div
                className="experience-logo-fallback"
                aria-label="Ethara.ai logo"
              >
                <span>e</span>
              </div>
            </div>

            <p className="experience-company-name">Ethara.ai</p>
            <span className="experience-company-type">
              ARTIFICIAL INTELLIGENCE
            </span>
          </div>

          {/* RIGHT: EXPERIENCE DETAILS */}
          <div className="experience-details">

            <div className="experience-top">
              <div>
                <span className="experience-role-label">
                  INTERNSHIP
                </span>

                <h3>LLM Post-Training Intern</h3>

                <p className="experience-company">
                  Ethara.ai <span>·</span> Remote
                </p>
              </div>

              <div className="experience-status">
                <span className="experience-status-dot"></span>
                Internship Completed
              </div>
            </div>

            <div className="experience-divider"></div>

            <h4>Role Overview</h4>

            <p className="experience-description">
              Worked as an LLM Post-Training Intern, gaining exposure to
              large language model workflows and AI-related tasks.
              This experience contributed to my understanding of AI
              systems and strengthened my technical learning.
            </p>

            <h4>Key Areas</h4>

            <div className="experience-skills">
              <span>Large Language Models</span>
              <span>LLM Post-Training</span>
              <span>AI Workflows</span>
              <span>Model Evaluation</span>
            </div>

            <div className="experience-bottom">
              <div className="experience-highlight">
                <span className="experience-highlight-icon">✦</span>
                <span>AI & Machine Learning Experience</span>
              </div>
            </div>

          </div>
        </article>

        {/* BOTTOM MESSAGE */}
        <div className="experience-footer">
          <span className="experience-footer-line"></span>
          <p>Learning, building, and growing through experience.</p>
          <span className="experience-footer-line"></span>
        </div>

      </div>
    </section>
  );
}

export default Experience;