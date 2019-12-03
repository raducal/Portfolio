import React from "react";

const SingleProject = ({
  title,
  desc,
  projectClass,
  projectImageClass,
  titleClass,
  projectDesc
}) => {
  return (
    <div className={projectClass}>
      <div className="project-description">
        <div className={titleClass}>
          <h3>{title}</h3>
        </div>
        <div className={projectDesc}>
          <p>{desc}</p>
        </div>
      </div>
      <div className={projectImageClass}></div>
    </div>
  );
};

export default SingleProject;
