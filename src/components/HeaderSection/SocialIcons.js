import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="social-div">
      <ul className="social-icons-list">
        <li className="social-icon">
          <a href="#">
            <FaEnvelope />
          </a>
        </li>
        <li className="social-icon">
          <a href="#">
            <FaLinkedin />
          </a>
        </li>
        <li className="social-icon">
          <a href="#">
            <FaGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
