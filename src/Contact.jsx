import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

// EmailJS Configuration
const SERVICE_ID = "service_ujrlk2n";
const TEMPLATE_ID = "template_fk5ra2f";
const PUBLIC_KEY = "HzgLTgBrcwv6XD2R0";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // Send email using EmailJS
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      };

      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        {
          publicKey: PUBLIC_KEY,
        }
      );

      if (response.status === 200) {
        setStatus({
          type: "success",
          message:
            "Message sent successfully! Thank you for contacting me.",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(`Unexpected response: ${response.status}`);
      }
    } catch (error) {
      console.error("EmailJS sending error:", error);

      setStatus({
        type: "error",
        message:
          error?.text ||
          error?.message ||
          "Unable to send your message. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* SECTION HEADING */}
        <div className="contact-heading">
          <span className="contact-eyebrow">LET'S CONNECT</span>

          <h2>
            Get In <span>Touch</span>
          </h2>

          <p>
            Have an opportunity, a project idea, or just want to connect?
            I'd love to hear from you.
          </p>
        </div>

        <div className="contact-content">

          {/* LEFT SIDE */}
          <div className="contact-info">
            <span className="contact-small-heading">
              CONTACT INFORMATION
            </span>

            <h3>
              Let's build something
              <br />
              <span>meaningful together.</span>
            </h3>

            <p className="contact-description">
              I'm open to entry-level software development opportunities
              and excited to contribute my skills, build innovative
              solutions, and grow as a developer.
            </p>

            {/* EMAIL */}
            <a
              href="mailto:kundorukundana1@gmail.com"
              className="contact-info-card"
            >
              <div className="contact-info-icon">✉</div>

              <div>
                <span>Email Me</span>
                <h4>kundorukundana1@gmail.com</h4>
              </div>

              <span className="contact-arrow">↗</span>
            </a>

            {/* LOCATION */}
            <div className="contact-info-card">
              <div className="contact-info-icon">⌖</div>

              <div>
                <span>Location</span>
                <h4>Andhra Pradesh, India</h4>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="contact-socials">
              <span className="contact-social-label">
                FIND ME ONLINE
              </span>

              <div className="contact-social-links">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  in
                </a>

                <a
                  href="https://github.com/Kundanakonduru"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  GH
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <div className="contact-form-card">
            <div className="contact-form-heading">
              <span>HAVE A PROJECT OR OPPORTUNITY?</span>
              <h3>Send Me a Message</h3>
              <p>Fill in the details below to get in touch.</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">

              {/* NAME AND EMAIL */}
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Your Name</label>

                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    maxLength={100}
                    required
                    disabled={isSending}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    maxLength={254}
                    required
                    disabled={isSending}
                  />
                </div>
              </div>

              {/* SUBJECT */}
              <div className="contact-field">
                <label htmlFor="contact-subject">Subject</label>

                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  value={formData.subject}
                  onChange={handleChange}
                  maxLength={150}
                  required
                  disabled={isSending}
                />
              </div>

              {/* MESSAGE */}
              <div className="contact-field">
                <label htmlFor="contact-message">Your Message</label>

                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Write your message here..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={4000}
                  required
                  disabled={isSending}
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="contact-submit-btn"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send Message"}

                {!isSending && <span>↗</span>}
              </button>

              {/* SUCCESS OR ERROR MESSAGE */}
              {status.message && (
                <p
                  className="contact-form-note"
                  role={status.type === "error" ? "alert" : "status"}
                  aria-live="polite"
                  style={{
                    color:
                      status.type === "success"
                        ? "#34d399"
                        : status.type === "error"
                          ? "#f87171"
                          : undefined,
                    overflowWrap: "anywhere",
                  }}
                >
                  {status.type === "success" ? "✓ " : ""}

                  {status.type === "error"
                    ? `Message failed: ${status.message}`
                    : status.message}
                </p>
              )}

              {!status.message && (
                <p className="contact-form-note">
                  Your message will be sent directly to my inbox.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* FOOTER */}
        <div className="contact-footer">
          <p>
            Designed &amp; Built with <span>♥</span> by Kundana
          </p>

          <button
            type="button"
            className="back-to-top"
            onClick={() =>
              document.getElementById("home")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Back to Top ↑
          </button>
        </div>

      </div>
    </section>
  );
}

export default Contact;