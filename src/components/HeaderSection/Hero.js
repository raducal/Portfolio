import React, { Fragment, useEffect, useState } from "react";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-scroll";

import Links from "../Links";

const Hero = () => {
  const [state, setState] = useState({
    data: ["Motivated", "Passionate", "Committed"],
    text: "",
    speed: 300,
    pos: 0,
    turn: 0,
    isTyping: false,
  });

  const typing = () => {
    if (state.pos < state.data[state.turn].length) {
      setState({
        ...state,
        text: (state.text += state.data[state.turn].charAt(state.pos)),
        pos: state.pos + 1,
        isTyping: true,
      });
    } else {
      setState({
        ...state,
        pos: 0,
        text: "",
        isTyping: false,
        turn: state.turn + 1,
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
          text: "",
        });
      }, 500);
    } else {
      typing();
    }
  }, state.speed);

  return (
    <section id="home">
      <div className="header-container">
        <Navbar />
        <div className="header-content">
          <div className="header-text">
            <h1>
              Hi, <span>&#9996;</span> <br />
              I'm <span className="name">Radu</span>
            </h1>
            <h3 className="header-slogan">
              <span className="header-span">Full-Stack</span> Developer
            </h3>
          </div>
          <SocialIcons />
          <Links />
        </div>
        <Link
          className="arrow-down"
          activeClass="active"
          to="project"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <IoIosArrowDown />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
