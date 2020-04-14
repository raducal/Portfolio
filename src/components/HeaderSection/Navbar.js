import React, { useEffect, useState } from "react";

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
    setActive(true);
  };

  return (
    <nav className={nav ? "navbar" : "navbar-scroll"}>
      <div className="nav-container">
        <div>
          <div className="logo"></div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <ul className={!active ? "nav-links" : "nav-links-mobile"}>
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
          <div onClick={handleBurgerClick} className="burger">
            <div className="line"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
