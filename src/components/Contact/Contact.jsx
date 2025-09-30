import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaComment,
} from "react-icons/fa";
import SocialLinks from "../SocialLinks/SocialLinks";
import "./Contact.css";

const Contact = ({ language = "en" }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceID = "service_lff04v9";
  const templateID = "template_fsk6aqo";
  const publicKey = "QkQQNgNmK3PtmRukN";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      () => {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 3000);
      },
      (error) => {
        console.error("EmailJS error:", error);
        alert("Something went wrong, try again!");
      }
    );
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {language === "ro"
            ? "Hai să colaborăm la următorul proiect!"
            : "Let's Collaborate on Your Next Project!"}
        </motion.h2>

        <motion.p
          className="contact-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {language === "ro"
            ? "Contactează-mă pe rețelele sociale sau prin formular"
            : "Reach me on social media or via the form below"}
        </motion.p>

        <div className="contact-content">
          <motion.div
            className="socials-section"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="section-subtitle">
              {language === "ro" ? "Conectează-te cu mine" : "Connect With Me"}
            </h3>
            <SocialLinks />
          </motion.div>

          <motion.div
            className="form-container"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="section-subtitle">
              {language === "ro" ? "Trimite-mi un mesaj" : "Send Me a Message"}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  name="name"
                  placeholder={language === "ro" ? "Numele tău" : "Your name"}
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="input-group">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder={language === "ro" ? "Email" : "Email"}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="input-group textarea">
                <FaComment className="input-icon" />
                <textarea
                  name="message"
                  placeholder={language === "ro" ? "Mesajul tău" : "Your message"}
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPaperPlane />
                {language === "ro" ? "Trimite mesajul" : "Send Message"}
              </motion.button>

              {isSubmitted && (
                <motion.div
                  className="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {language === "ro"
                    ? "✓ Mesaj trimis cu succes!"
                    : "✓ Message sent successfully!"}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;