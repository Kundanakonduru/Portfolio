import React, { useEffect, useState } from "react";
import "./aboutme.css";

const INTRO_TEXT =
  "I'm a Computer Science and Engineering graduate with hands-on experience " +
  "in Python programming, web development, and Artificial Intelligence and " +
  "Machine Learning, through internships and projects. " +
  "I have worked with technologies such as Python, Flask, React.js, " +
  "JavaScript, SQL, and REST APIs. " +
  "My experience includes full-stack application development, database " +
  "management, data validation, testing, and debugging. " +
  "I'm eager to learn emerging technologies and apply my skills to develop " +
  "practical solutions as a software and AI engineer.";

function AboutMe() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Stop speech when the component unmounts
  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
    };
  }, []);

  const handlePlay = () => {
    if (!("speechSynthesis" in window)) {
      alert("Your browser does not support text-to-speech.");
      return;
    }

    const synth = window.speechSynthesis;

    // Stop the introduction if it is already playing
    if (synth.speaking) {
      synth.cancel();
      setIsPlaying(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(INTRO_TEXT);

    utterance.lang = "en-IN";
    utterance.rate = 0.95;
    utterance.pitch = 1.1;
    utterance.volume = 1;

    // Select a suitable English voice when available
    const voices = synth.getVoices();

    const preferredVoice =
      voices.find(
        (voice) =>
          voice.lang.toLowerCase().startsWith("en-in") &&
          /female|heera|google/i.test(voice.name)
      ) ||
      voices.find(
        (voice) =>
          voice.lang.toLowerCase().startsWith("en") &&
          /female|zira|samantha|google/i.test(voice.name)
      ) ||
      voices.find((voice) =>
        voice.lang.toLowerCase().startsWith("en-in")
      ) ||
      voices.find((voice) =>
        voice.lang.toLowerCase().startsWith("en")
      );

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onstart = () => {
      setIsPlaying(true);
    };

    utterance.onend = () => {
      setIsPlaying(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
    };

    synth.cancel();
    synth.speak(utterance);
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* PROFILE IMAGE */}
        <div className="avatar-area">
          <div className="avatar-glow"></div>

          <img
            className="avatar-video"
            src="/girl.png"
            alt="Kundana's profile avatar"
          />
        </div>

        {/* ABOUT CONTENT */}
        <div className="about-content">
          <p className="small-title">ABOUT ME</p>

        

          <p className="about-text">
            I'm a Computer Science and Engineering graduate with hands-on
            experience in Python programming, web development, and Artificial
            Intelligence and Machine Learning (AI/ML) through internships and
            projects. I have worked with technologies such as Python, Flask,
            React.js, JavaScript, SQL, and REST APIs. My experience includes
            full-stack application development, database management, data
            validation, testing, and debugging. I'm eager to learn emerging
            technologies and apply my skills to develop practical solutions
            as a software and AI engineer.
          </p>

          {/* VOICE INTRODUCTION BUTTON */}
          <button
            type="button"
            className="listen-btn"
            onClick={handlePlay}
            aria-label={
              isPlaying
                ? "Stop introduction"
                : "Listen to my introduction"
            }
          >
            <span className="play-icon" aria-hidden="true">
              {isPlaying ? "■" : "▶"}
            </span>

            {isPlaying
              ? "Stop Introduction"
              : "Listen to my introduction"}
          </button>

          {/* STATISTICS */}
          <div className="about-stats">

            <div className="stat">
              <h3>🎓</h3>
              <strong>CSE Graduate</strong>
              <span>2026</span>
            </div>

            <div className="stat">
              <h3>💻</h3>
              <strong>3+</strong>
              <span>Major Projects</span>
            </div>

            <div className="stat">
              <h3>⭐</h3>
              <strong>2+</strong>
              <span>Internships</span>
            </div>

            <div className="stat">
              <h3>📈</h3>
              <strong>Always</strong>
              <span>Learning</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;