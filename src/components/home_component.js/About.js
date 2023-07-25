import React from "react";
import "../../styles/style.css";
import { HiDownload } from "react-icons/hi";

function About() {
  return (
    <section id="BackgroundBlack">
    <div className="container py-5">
      <p id="text-4" className="">
        About me
      </p>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12 pt-5">
          <p id="text-5">IT Experience</p>
          <p id="text-3" className="pb-5">
            Welcome to my portfolio, where I specialize in building bridges
            between design, technology, and user experience. With a focus on
            creating visually appealing interfaces, leveraging cutting-edge
            technology, and prioritizing user-centric design, I develop holistic
            digital solutions. By collaborating closely with clients and teams,
            I strive to create innovative and engaging experiences that drive
            business success. Feel free to customize and adjust this content to
            best represent your skills and approach as a software developer and
            designer.
          </p>
          <button
              className="button-background-move"
            >
               Download my CVV <HiDownload id="DownloadIcon" />
            </button>
        </div>
        <div className="col-lg-1 col-md-1 col-12"></div>
        <div className="col-lg-5 col-md-5 col-12 pt-5">
          <div>
            <div className="d-flex align-items-center justify-content-between">
              <span>
                <p id="SkillsKnow">Figma</p>
              </span>
              <span>
                <p id="SkillsKnow">90%</p>
              </span>
            </div>
            <input type="range" min="1" max="100" value="90" id="RangeInput" />
          </div>
          <div>
            <div className="d-flex align-items-center justify-content-between">
              <span>
                <p id="SkillsKnow">React Js</p>
              </span>
              <span>
                <p id="SkillsKnow">85%</p>
              </span>
            </div>
            <input type="range" min="1" max="100" value="85" id="RangeInput" />
          </div>
          <div>
            <div className="d-flex align-items-center justify-content-between">
              <span>
                <p id="SkillsKnow">Wordpress</p>
              </span>
              <span>
                <p id="SkillsKnow">80%</p>
              </span>
            </div>
            <input type="range" min="1" max="100" value="80" id="RangeInput" />
          </div>
          <div>
            <div className="d-flex align-items-center justify-content-between">
              <span>
                <p id="SkillsKnow">Laravel</p>
              </span>
              <span>
                <p id="SkillsKnow">70%</p>
              </span>
            </div>
            <input type="range" min="1" max="100" value="70" id="RangeInput" />
          </div>
          <div>
            <div className="d-flex align-items-center justify-content-between">
              <span>
                <p id="SkillsKnow">Boostrap</p>
              </span>
              <span>
                <p id="SkillsKnow">90%</p>
              </span>
            </div>
            <input type="range" min="1" max="100" value="90" id="RangeInput" />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default About;
