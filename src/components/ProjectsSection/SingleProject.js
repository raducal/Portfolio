import React from "react";

const SingleProject = ({
  title,
  desc,
  projectImageSrc,
  projectImageClass,
  tech,
  active,
}) => {
  let para = desc.split("|");

  const buttonsShow = () => {
    if (active === "none") {
      return null;
    } else if (active === true) {
      return (
        <button className="btn">
          <a href="#" className="btn-transparent">
            Code
          </a>
        </button>
      );
    } else if (active === false) {
      return (
        <>
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
        </>
      );
    }
  };
  return (
    <div className="project">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          width: "100%",
        }}
      >
        <div className="project-title">
          <h3>{title}</h3>
        </div>
        <img className={projectImageClass} src={projectImageSrc} alt="" />
      </div>
      <div className="project-div">
        <div className="project-description">
          {para.map((p) => {
            return (
              <>
                <p>{p}</p>
                <br />
              </>
            );
          })}
        </div>
        <div className="project-tech">
          <p style={{ color: "#000" }}>Tech: </p>
          {tech.split(" ").map((t) => {
            return <span style={{ paddingRight: "0.25rem" }}>{t}</span>;
          })}
        </div>
        <div className="btn-container">{buttonsShow()}</div>
      </div>
    </div>
  );
};

export default SingleProject;
