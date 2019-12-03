import React from "react";
import HeadingTitle from "../HeadingTitle";
import SingleProject from "./SingleProject";

const Projects = () => {
  return (
    <section className="section">
      <HeadingTitle
        title="Projects"
        num="2."
        headingClass="heading-title-bg"
        titleClass="heading-title"
      />
      <div className="relative-div">
        <SingleProject
          title="Recipe Cloud"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo voluptas quod expedita consequatur, architecto natus facilis numquam in odit animi placeat quisquam consequuntur assumenda reprehenderit perspiciatis aut nulla repudiandae reiciendis? Alias, suscipit autem. Unde maiores rem atque quaerat assumenda magnam?"
          projectImageClass="project-image"
          projectClass="project"
          titleClass="project-title"
          projectDesc="project-description"
        />
        <SingleProject
          title="Contact Keeper"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo voluptas quod expedita consequatur, architecto natus facilis numquam in odit animi placeat quisquam consequuntur assumenda reprehenderit perspiciatis aut nulla repudiandae reiciendis? Alias, suscipit autem. Unde maiores rem atque quaerat assumenda magnam?"
          projectImageClass="project-image-start"
          projectClass="project-opposite"
          titleClass="project-title-opposite"
          projectDesc="project-description-opposite"
        />
        <SingleProject
          title="Recipe Cloud"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo voluptas quod expedita consequatur, architecto natus facilis numquam in odit animi placeat quisquam consequuntur assumenda reprehenderit perspiciatis aut nulla repudiandae reiciendis? Alias, suscipit autem. Unde maiores rem atque quaerat assumenda magnam?"
          projectImageClass="project-image"
          projectClass="project"
          titleClass="project-title"
          projectDesc="project-description"
        />
      </div>
    </section>
  );
};

export default Projects;
