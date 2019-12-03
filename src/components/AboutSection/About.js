import React, { Fragment } from "react";
import HeadingTitle from "../HeadingTitle";
import man from "../../images/man-shape.svg";
import Skills from "./Skills";

const About = () => {
  return (
    <section className="section">
      <HeadingTitle
        title="About"
        num="1."
        headingClass="heading-title-bg"
        titleClass="heading-title"
      />
      <div className="about-me-div">
        <p className="about-me-paragraph">
          A 4th year Computer Engineering student from Ireland with a strong
          interest in Technology and a passion for Software Development and
          Cyber Security.
        </p>
        <div className="about-me-img">
          <img src={man} alt="man" />
        </div>
        <Skills />
      </div>
    </section>
  );
};

export default About;
