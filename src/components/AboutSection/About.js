import React, { Fragment } from "react";
import HeadingTitle from "../HeadingTitle";
import man from "../../images/man-shape.svg";
import Skills from "./Skills";

const About = () => {
  return (
    <section className="section">
      <HeadingTitle
        title="About"
        num="#"
        headingClass="heading-title-bg"
        titleClass="heading-title"
      />
      <div className="about-me-div" style={{ position: "relative" }}>
        <div className="about-me-left">
          <p className="about-me-paragraph">
            A 4th year Computer Engineering student with a strong interest in
            Technology and a passion for Software Development. I'm obsessed with
            creating things and learning something new everyday. If you have any
            questions or just want to chat, don't hesistate to contact me.
          </p>
          <button className="contactBtn">Contact Me</button>
        </div>
        <div className="about-me-skills">
          <p style={{ fontSize: "13px" }}>Javascript</p>
          <p style={{ fontSize: "13px" }}>React.js</p>
          <p style={{ fontSize: "13px" }}>Node.js</p>
          <p style={{ fontSize: "13px" }}>MongoDB</p>
          <p style={{ fontSize: "13px" }}>Postgressql</p>
        </div>
      </div>
    </section>
  );
};

export default About;
