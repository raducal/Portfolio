import React from "react";

import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Links = () => {
  return (
    <div class="links-container">
      <div class="links">
        <div class="link">
          <a
            href="https://github.com/raducostica"
            target="_blank"
            class="link-contact"
          >
            <FaGithub size={60} />
          </a>
        </div>
        <div class="link">
          <a
            href="https://ie.linkedin.com/in/radu-costica-911205183"
            target="_blank"
            class="link-contact"
          >
            <FaLinkedin size={60} />
          </a>
        </div>
        <div class="link">
          <a href="mailto: radu.costica@hotmail.com" class="link-contact">
            <FaEnvelope size={60} />
          </a>
        </div>
        <div class="link">
          <a href=""></a>
        </div>
      </div>
    </div>
  );
};

export default Links;
