import React, { Fragment, useEffect, useState } from "react";
import Navbar from "./Navbar";
import hacker from "../../images/hacker.svg";
import SocialIcons from "./SocialIcons";
import { IoIosArrowDown } from "react-icons/io";

const Hero = () => {
  const [state, setState] = useState({
    data: ["Motivated", "Passionate", "Committed"],
    text: "",
    speed: 300,
    pos: 0,
    turn: 0,
    isTyping: false
  });

  const typing = () => {
    if (state.pos < state.data[state.turn].length) {
      setState({
        ...state,
        text: (state.text += state.data[state.turn].charAt(state.pos)),
        pos: state.pos + 1,
        isTyping: true
      });
    } else {
      setState({
        ...state,
        pos: 0,
        text: "",
        isTyping: false,
        turn: state.turn + 1
      });
    }
  };

  setTimeout(() => {
    if (state.turn >= state.data.length) {
      setTimeout(() => {
        setState({
          ...state,
          pos: 0,
          isTyping: false,
          turn: 0,
          text: ""
        });
      }, 500);
    } else {
      typing();
    }
  }, state.speed);
  return (
    <Fragment>
      <div className="header-container" id="#home">
        <Navbar />
        <div className="header-content">
          <div className="header-text">
            <h1>
              Hello, <span>&#9996;</span> <br />
              I'm <span className="name">Radu</span>
            </h1>
            <h3 className="header-slogan">
              A{" "}
              <span className="header-typing">
                {state.isTyping ? state.text : <></>}{" "}
              </span>{" "}
              Developer
            </h3>
          </div>
          <div className="header-image-side">
            <div className="header-image">
              <img className="hacker-img" src={hacker} alt="hacker" />
            </div>
            <SocialIcons />
          </div>
        </div>
        <div className="arrow-down">
          <IoIosArrowDown />
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
