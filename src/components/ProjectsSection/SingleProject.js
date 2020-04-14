import React from "react";

import coding from "../../images/coding2.gif";

const SingleProject = ({
  title,
  desc,
  projectClass,
  projectImageClass,
  titleClass,
  projectDesc,
}) => {
  return (
    <div className="project">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="project-title">
          <h3>{title}</h3>
        </div>
        <img style={{ width: "100%" }} src={coding} alt="" />
      </div>
      <div className="project-div">
        <div className="project-description">
          <p>{desc}</p>
        </div>
        <div className="btn-container">
          <button className="btn">
            <a href="#" className="btn-link">
              Demo
            </a>
          </button>
          <button className="btn">
            <a href="#" className="btn-transparent">
              Code
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
