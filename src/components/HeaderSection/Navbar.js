import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(true);

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

  return (
    <nav className={nav ? "navbar" : "navbar-scroll"}>
      <div className="nav-container">
        <div>
          <div className="logo"></div>
        </div>
        <ul className="nav-links">
          <li className="nav-list">
            <a className="nav-link" href="#home">
              Home
            </a>
          </li>
          <li className="nav-list">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-list">
            <a className="nav-link" href="#">
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
