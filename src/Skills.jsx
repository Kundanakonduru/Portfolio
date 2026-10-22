import React from "react";
import "./Skills.css";

const skillCategories = [
  {
    number: "01",
    title: "Programming",
    subtitle: "Languages I work with",
    icon: "</>",
    skills: ["Python", "JavaScript"],
  },
  {
    number: "02",
    title: "Python Full Stack Development",
    subtitle: "Building modern web applications",
    icon: "⌘",
    skills: [
      "Flask",
      "FastAPI",
      "React.js",
      "HTML5",
      "CSS3",
      "REST APIs",
    ],
  },
  {
    number: "03",
    title: "AI & Machine Learning",
    subtitle: "Data-driven solutions",
    icon: "✳",
    skills: [
      "Machine Learning",
      "Data Preprocessing",
      "Data Validation",
      "LLM Evaluation",
    ],
  },
  {
    number: "04",
    title: "Databases & Tools",
    subtitle: "Data management and development tools",
    icon: "⌘",
    skills: ["MySQL", "SQLite", "Git", "GitHub"],
  },
  {
    number: "05",
    title: "Core Skills",
    subtitle: "How I approach problems",
    icon: "✦",
    skills: [
      "Problem-Solving",
      "Debugging",
      "Testing",
      "Analytical Thinking",
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        {/* Section Heading */}
        <div className="skills-heading">
          <p className="skills-eyebrow">
            WHAT I BRING TO THE TABLE
          </p>

          <h2>
            My <span>Technical Skills</span>
          </h2>

          <p className="skills-description">
            Technologies, tools, and problem-solving skills I use
            to build applications and explore intelligent solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <article
              className="skill-card"
              key={category.number}
            >
              <div className="skill-card-top">
                <span className="skill-number">
                  {category.number}
                </span>

                <span className="skill-icon" aria-hidden="true">
                  {category.icon}
                </span>
              </div>

              <h3>{category.title}</h3>

              <p className="skill-subtitle">
                {category.subtitle}
              </p>

              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

              <div className="skill-card-line"></div>
            </article>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="skills-footer">
          <span className="skills-footer-dot"></span>
          Always learning. Always building. Always improving.
        </div>

      </div>
    </section>
  );
}

export default Skills;