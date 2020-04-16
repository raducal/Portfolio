import React from "react";
import HeadingTitle from "../HeadingTitle";
import SingleProject from "./SingleProject";

import coding from "../../images/coding2.gif";
import noteapp from "../../images/notesapp.gif";
import stlr from "../../images/stlr.jpg";

const Projects = () => {
  return (
    <section className="section" id="project">
      <HeadingTitle
        title="Projects"
        num="#"
        headingClass="heading-title-bg"
        titleClass="heading-title"
      />
      <div className="relative-div">
        <div className="projects">
          <SingleProject
            title="Code Calendar"
            desc="A Full-Stack web app built for those interested in and/or taking part in the 100DaysOfCode challenge. | Users can create an account and start the challenge. The app shows the user when the challenge will end and how many days have gone by since the challenge started. Users can keep track of what they have learned on any day by leaving a note. | Additionally, Users can earn 10 points everyday they login and for any new commites they have on github."
            tech="Typescript React.js Node.js PostgreSQL"
            projectImageSrc={coding}
            projectImageClass="project-img"
            active={false}
            demoLink={"https://code-calendar.netlify.app/"}
            codeLink={"https://github.com/raducostica/Typescript_Calendar"}
          />
          <SingleProject
            title="Notes App"
            desc="Full-Stack mobile app built for personal use so that I could take notes on the fly and also have access to a scientific calculator whenever I may need it."
            projectImageSrc={noteapp}
            projectImageClass="project-img-mobile"
            tech="React Native Node.js MongoDB"
            active={true}
            demoLink={null}
            codeLink={
              "https://github.com/raducostica/React_Native_Notes_App_and_Scientific_Calc"
            }
          />
          <SingleProject
            title="STLR App"
            desc="Current final year project. Full-Stack mobile and web app that allows lecturers at TUD to keep track of which student has attended which STLR tagged events. | The app allows lecturers to display a QR code, which changes every 30 seconds to prevent cheating. The student scans the QR code using the mobile app and they are automatically marked as present for that event. "
            projectImageSrc={stlr}
            projectImageClass="project-img-mobile project-img-stlr"
            tech="React.js React Native Node.js MongoDB"
            active={"none"}
            demoLink={null}
            codeLink={null}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
