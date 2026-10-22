import "./App.css";
import AboutMe from "./aboutme.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Experience from "./Experience.jsx";
import Education from "./Education.jsx";
import Achievements from "./Achievements.jsx";
import Contact from "./Contact.jsx";

function App() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="portfolio">
      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div
          className="logo"
          onClick={() => scrollToSection("home")}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              scrollToSection("home");
            }
          }}
        >
          Kundana<span>.</span>
        </div>

        <div className="nav-links">
          <a
            href="#home"
            className="active"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("home");
            }}
          >
            Home
          </a>

          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          type="button"
          className="connect-btn"
          onClick={() => scrollToSection("contact")}
        >
          Let's Connect <span>↗</span>
        </button>
      </nav>

      {/* ================= HOME PAGE ================= */}

      <main className="home" id="home">
        {/* Background Effects */}

        <div className="glow glow-one"></div>
        <div className="glow glow-two"></div>

        <div className="home-container">
          {/* LEFT SIDE - PROFILE IMAGE */}

          <section className="hero-visual">
            <div className="circle-bg"></div>

            <div className="girl-image">
              <img
                src="/girl.png"
                alt="Kundana - Python Full Stack Developer"
              />
            </div>

            {/* Floating Card 1 */}

            <div className="floating-card card-one">
              <span>01</span>
              <p>Build</p>
            </div>

            {/* Floating Card 2 */}

            <div className="floating-card card-two">
              <span>02</span>
              <p>Create</p>
            </div>
          </section>

          {/* RIGHT SIDE - INTRODUCTION */}

          <section className="hero-content">
            <p className="small-title">
              PYTHON FULL STACK DEVELOPER
            </p>

            <h1>
              Hi, I'm <span>Kundana</span>
            </h1>

            <h2>
              Python Full Stack Developer
              <br />
              <span>&amp; AI Enthusiast</span>
            </h2>

            <p className="description">
              I build modern, responsive web applications and enjoy
              turning ideas into practical digital experiences. I'm
              passionate about Python, web development, problem-solving,
              and continuously learning new technologies.
            </p>

            {/* ACTION BUTTONS */}

            <div className="buttons">
              <button
                type="button"
                className="primary-btn"
                onClick={() => scrollToSection("projects")}
              >
                Explore My Work <span>↗</span>
              </button>

              <button
                type="button"
                className="secondary-btn"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </button>
            </div>

            {/* AVAILABILITY STATUS */}

            <div className="availability">
              <span className="status-dot"></span>
              Open to opportunities
            </div>
          </section>
        </div>
      </main>

      {/* ================= ABOUT ME ================= */}

      <AboutMe />

      {/* ================= SKILLS ================= */}

      <Skills />

      {/* ================= PROJECTS ================= */}

      <Projects />

      {/* ================= EXPERIENCE ================= */}

      <Experience />

      {/* ================= EDUCATION ================= */}

      <Education />

      {/* ================= ACHIEVEMENTS ================= */}

      <Achievements />

      {/* ================= CONTACT ================= */}

      <Contact />
    </div>
  );
}

export default App;