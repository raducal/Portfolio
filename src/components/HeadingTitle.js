import React from "react";

const HeadingTitle = ({ title, num }) => {
  return (
    <div className="heading-container">
      <div className="heading-title-bg">
        {num}
        <div className="heading-title">{title}</div>
      </div>
    </div>
  );
};

export default HeadingTitle;
