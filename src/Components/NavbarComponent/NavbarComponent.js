import React from "react";
import "./navbar.css";
import { useState, useEffect } from "react";

export default function NavbarComponent() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const openNav = () => {
    setAnimationClass("leftToRight");
    setMenuOpen(true);
  };

  const closeNav = () => {
    setAnimationClass("rightToLeft");
    setTimeout(() => {
      setMenuOpen(false);
      setTimeout(() => {
        setAnimationClass("leftToRight");
      }, 500);
    }, 500);
  };

  return (
    <>
      <div className="navitems">
        <div className="left">
          <p>Cryptowatch</p>
        </div>
        {windowSize[0] > 790 ? (
          <div className="middle" id="menu">
            <p>
              <a href="#home">Home</a>
            </p>
            <p>
              <a href="#home">Market</a>
            </p>
            <p>
              <a href="#home">Choose Us</a>
            </p>
            <p>
              <a href="#home">Join</a>
            </p>
          </div>
        ) : (
          <></>
        )}

        {windowSize[0] > 790 ? (
          <div className="right">
            <p>
              <i className="fa-brands fa-twitter"></i>
            </p>
            <p>
              <i className="fa-brands fa-discord"></i>
            </p>
          </div>
        ) : (
          <div className="right">
            <p onClick={() => openNav()}>
              <i className="fa-solid fa-bars"></i>
            </p>
          </div>
        )}
        {menuOpen && (
          <div className={`menu-overlay ${animationClass}`}>
            <div className="menu-container">
              <p className="closeBtn" onClick={() => closeNav()}>
                <i className="fa-solid fa-xmark"></i>
              </p>
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#home">Market</a>
              </p>
              <p>
                <a href="#home">Choose Us</a>
              </p>
              <p>
                <a href="#home">Join</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
