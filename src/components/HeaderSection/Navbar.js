import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      console.log(isTop);
      if (isTop !== nav) {
        setNav(false);
      } else {
        setNav(true);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBurgerClick = () => {
    setActive(!active);
  };

  return (
    <nav className={nav ? "navbar" : "navbar-scroll"}>
      <div className="nav-container">
        <div>
          <div className="logo"></div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <ul className={`nav-links ${active ? "open" : ""}`}>
            <li className="nav-list">
              <Link
                className="nav-link"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav-list">
              <Link
                className="nav-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav-list">
              <Link
                className="nav-link"
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="nav-list">
              <Link
                className="nav-link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={700}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div onClick={handleBurgerClick} className="burger">
            <div className={`line ${active ? "active" : ""}`}></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
