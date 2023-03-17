import React from "react";
import "./navbar.css";
import { useState, useEffect } from "react";

export default function NavbarComponent() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  let openNav = () => {
    console.log("hi");
  };

  return (
    <>
      <div className="navitems">
        <div className="left">
          <p>Cryptowatch</p>
        </div>
        {windowSize[0] > 790 ? (
          <div className="middle" id="menu">
            <p>Home</p>
            <p>Market</p>
            <p>Choose Us</p>
            <p>Join</p>
          </div>
        ) : (
          <></>
        )}

        {windowSize[0] > 790 ? (
          <div className="right">
            <p>
              <i class="fa-brands fa-twitter"></i>
            </p>
            <p>
              <i class="fa-brands fa-discord"></i>
            </p>
          </div>
        ) : (
          <div className="right">
            <p onClick={openNav()}>
              <i class="fa-solid fa-bars"></i>
            </p>
          </div>
        )}
      </div>
    </>
  );
}
