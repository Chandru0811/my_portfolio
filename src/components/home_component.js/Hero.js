import React from "react";
import "../../styles/style.css";
import Linkedin from "../../assets/image-3.png";
import Github from "../../assets/image-2.png";
import Whatsapp from "../../assets/Image-1.png";
import HeroImg from "../../assets/Image-4.png";

function Hero() {
  
  return (
    <section id="BackgroundBlack">
    <div className="container-fluid py-5">
      <div className="row">
        <div className="col-lg-1 col-md-1 col-2 d-flex flex-column align-items-center justify-content-center">
          <img src={Linkedin} alt="linkedin" className="img-fluid pb-5" />
          <br />
          <img src={Github} alt="github" className="img-fluid pb-5" />
          <br />
          <img src={Whatsapp} alt="whatsapp" className="img-fluid pb-5" />
        </div>
        <div className="col-lg-5 col-md-5 col-10 d-flex flex-column align-items-center justify-content-center">
          <img src={HeroImg} alt="HeroImg" className="img-fluid pb-5" />
        </div>
        <div className="col-lg-6 col-md-6 col-12 d-flex flex-column justify-content-center">
          <p id="text-1">Hello, I'm</p>
          <p id="text-2">Chandru </p>
          <p id="text-1" className="pb-5">
            Im a Creative{" "}
            <span style={{ color: "var(--secondary-color)" }}>Developer</span>{" "}
          </p>
          <p id="text-3" className="pb-5">
            I am a passionate software developer and designer, driven by the
            endless possibilities of creating visually stunning interfaces and
            transforming complex ideas into elegant and functional solutions.
          </p>
          <div>
            <button
              className="button-background-move"
            >
               Let's Collaborate on Your Next Project
            </button>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Hero;
