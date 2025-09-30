import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaTelegram,
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaComment,
} from "react-icons/fa";
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

  const socialPlatforms = [
    {
      id: "instagram",
      name: "Instagram",
      icon: <FaInstagram />,
      color: "#E1306C",
      url: "https://instagram.com/artdenmedia",
    },
    {
      id: "tiktok",
      name: "TikTok",
      icon: <FaTiktok />,
      color: "#000000",
      url: "https://tiktok.com/@artdenmedia",
    },
    {
      id: "facebook",
      name: "Facebook",
      icon: <FaFacebook />,
      color: "#1877F2",
      url: "https://facebook.com/artdenmedia",
    },
    {
      id: "telegram",
      name: "Telegram",
      icon: <FaTelegram />,
      color: "#0088CC",
      url: "https://t.me/artdenmedia",
    },
  ];

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
            : "Let’s collaborate on your next project!"}
        </motion.h2>

        <motion.p
          className="contact-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {language === "ro"
            ? "Contactează-mă pe rețelele sociale sau prin formular:"
            : "Reach me on social media or via the form below:"}
        </motion.p>

        <div className="contact-content">
          <motion.div
            className="socials"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="socials-grid">
              {socialPlatforms.map((p, i) => (
                <motion.a
                  key={p.id}
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-card"
                  style={{ "--clr": p.color }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <span className="icon">{p.icon}</span>
                  <span>{p.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="form-container"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPaperPlane />{" "}
                {language === "ro" ? "Trimite mesajul" : "Send message"}
              </motion.button>

              {isSubmitted && (
                <motion.div
                  className="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
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
