import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiMongodb } from "react-icons/di";

const Skills = () => {
  return (
    <div className="about-me-skills">
      <p>Skills</p>
      <ul className="front-end-skills">
        <li>
          <FaHtml5 />
          <p className="skill-name">HTML5</p>
        </li>
        <li>
          <FaCss3Alt />
          <p className="skill-name">CSS3</p>
        </li>
        <li>
          <IoLogoJavascript />
          <p className="skill-name">Javascript</p>
        </li>
        <li>
          <FaReact />
          <p className="skill-name">React</p>
        </li>
        <li>
          <FaNode />
          <p className="skill-name">Node.js</p>
        </li>
        <li>
          <DiMongodb />
          <p className="skill-name">MongoDB</p>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
