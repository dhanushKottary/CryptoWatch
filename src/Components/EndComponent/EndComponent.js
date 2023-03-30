import React from "react";
import "./end.css";

export default function EndComponent() {
  return (
    <>
      <div id="join">
        <div id="first1">
          <img src="/bitcoin.png" alt="bitcoin" />
          <span>Join us via</span>
          <img src="/ethereum.png" alt="ethereum" />
        </div>
        <div id="second1">
          <span>Discord</span>
        </div>
        <div className="text1">
          <p>Invest and manage all your crypto at one place.</p>
        </div>
        <div className="btnn">
          <button className="showBtn1">
            <a href="https://discord.com/" target="_blank" rel="noreferrer">
              Join via Discord
            </a>
          </button>
        </div>
        <div className="footer1">
          <div className="text2">
            <div className="icons">
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="https://discord.com/" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-discord"></i>
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
            <div className="details">
              <p>Privacy</p>
              <p>Terms of Use</p>
            </div>
            <div className="signature">
              <p>
                <i class="fa-solid fa-copyright"></i> Pranith
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
