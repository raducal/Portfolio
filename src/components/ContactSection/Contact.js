import React from "react";
import HeadingTitle from "../HeadingTitle";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="section contact-section" id="contact">
      <HeadingTitle
        title="Contact"
        num="#"
        headingClass="heading-title-bg-black"
        titleClass="heading-title-black"
      />
      <div className="relative-div">
        <div className="contact-div">
          <div className="contact-desc">
            <div className="contact-email">
              If you would like to talk, you can find me at:
              <h4>radu.costica@hotmail.com</h4>
            </div>
            <div className="social-icon-contacts">
              <ul className="social-icon-contacts-list">
                <li className="social-icon">
                  <a href="https://ie.linkedin.com/in/radu-costica-911205183">
                    <FaLinkedin />
                  </a>
                </li>
                <li className="social-icon">
                  <a href="https://github.com/raducostica">
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
