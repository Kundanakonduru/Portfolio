import React from "react";
import "./Projects.css";

const projects = [
  {
    number: "01",
    category: "FULL STACK DEVELOPMENT",
    title: "Logistics Route & Delivery Optimization Platform",
    description:
      "A logistics platform designed to manage delivery requests and streamline route and delivery operations through a centralized application.",
    technologies: ["Python", "Flask", "SQLite", "HTML5", "CSS3", "JavaScript"],
    github:
      "https://github.com/Kundanakonduru/Logistics-route-and-Delivery-optimization-platform",
    icon: "↗",
  },
  {
    number: "02",
    category: "WEB DEVELOPMENT",
    title: "Hospital Management System",
    description:
      "A web application focused on organizing hospital-related information and providing a structured interface for managing healthcare workflows.",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "REST APIs"],
    github:
      "https://github.com/Kundanakonduru/Hospital-Management-System",
    icon: "✚",
  },
  {
    number: "03",
    category: "ARTIFICIAL INTELLIGENCE & ML",
    title: "Knowledge-Informed ML for Cancer Diagnosis & Prognosis",
    description:
      "A machine learning project that explores incorporating biological knowledge into predictive models to support cancer diagnosis and prognosis.",
    technologies: [
      "Python",
      "Machine Learning",
      "FastAPI",
      "MySQL",
      "React.js",
      "REST APIs",
    ],
    github:
      "https://github.com/Kundanakonduru/Knowledge-Informed-ML-for-cancer-diagnosis-prognosis",
    icon: "⌘",
  },
  {
    number: "04",
    category: "FRONTEND DEVELOPMENT",
    title: "Online Learning Platform",
    description:
      "An online learning application designed to organize courses and provide an interface for learning activities and course management.",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Vite"],
    github:
      "https://github.com/Kundanakonduru/Online-Learning-Platform",
    icon: "▤",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        {/* SECTION HEADING */}
        <div className="projects-heading">
          <span className="projects-eyebrow">MY WORK</span>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p>
            A selection of projects where I apply my skills in full-stack
            development, web technologies, and machine learning to build
            practical solutions.
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>

                <span className="project-icon" aria-hidden="true">
                  {project.icon}
                </span>
              </div>

              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span className="project-tech" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-card-footer">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-project-btn"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  View Project
                  <span aria-hidden="true">↗</span>
                </a>

                <span className="project-footer-label">
                  GITHUB REPOSITORY
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* SECTION FOOTER */}
        <div className="projects-footer">
          <span className="projects-footer-dot"></span>
          Designed with curiosity. Built through continuous learning.
        </div>
      </div>
    </section>
  );
}

export default Projects;