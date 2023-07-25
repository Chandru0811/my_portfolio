import React from "react";
import HTML from "../../assets/Image-5.png";
import CSS from "../../assets/Image-6.png";
import JS from "../../assets/Image-7.png";
import SEO from "../../assets/Image-8.png";
import DM from "../../assets/Image-9.png";
import MYSQL from "../../assets/Image-10.png";
import CANVA from "../../assets/Image-11.png";
import PHP from "../../assets/Image-12.png";
import CPLUS from "../../assets/Image-13.png";
import JAVA from "../../assets/Image-14.png";
import PYTHON from "../../assets/Image-15.png";
import NODEJS from "../../assets/Image-16.png";
function Skills() {
  return (
    <section id="BackgroundBlack">
    <div className="container py-3">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12 py-5">
          <p id="text-6">Strongly Skilled</p>
          <div id="SkillsBox">
          <div className="row" id="SkillColor">
                <div className="col-lg-4 col-md-4 col-6 p-4" id="SkillColor">
                <img src={HTML} alt="Html" className="img-fluid" id="SkillColor" />
                </div>
                <div className="col-lg-4 col-md-4 col-6 p-4" id="SkillColor">
                <img src={CSS} alt="CSS" className="img-fluid" id="SkillColor" />
                </div>
                <div className="col-lg-4 col-md-4 col-6 p-4" id="SkillColor">
                <img src={JS} alt="Js" className="img-fluid" id="SkillColor" />
                </div>
                <div className="col-lg-4 col-md-4 col-6 p-4" id="SkillColor">
                <img src={SEO} alt="SEO" className="img-fluid" id="SkillColor"/>
                </div>
                <div className="col-lg-4 col-md-4 col-6 p-4" id="SkillColor">
                <img src={DM} alt="Digital_Markiting" className="img-fluid" id="SkillColor"/>
                </div>
                <div className="col-lg-4 col-md-4 col-6 p-4" id="SkillColor">
                <img src={MYSQL} alt="MySql" className="img-fluid" id="SkillColor"/>
                </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12 py-5">
          <p id="text-6">Some Familiarity</p>
          <div id="SkillsBox">
            <div className="row">
            <div className="col-lg-4 col-md-4 col-6 p-4" id="SkillColor">
                <img src={CANVA} alt="CANVA" className="img-fluid" id="SkillColor" />
                </div>
                <div className="col-lg-4 col-md-4 col-6 p-4" id="SkillColor">
                <img src={PHP} alt="PHP" className="img-fluid" id="SkillColor" />
                </div>
                <div className="col-lg-4 col-md-4 col-6 p-4" id="SkillColor">
                <img src={CPLUS} alt="CPLUS" className="img-fluid" id="SkillColor" />
                </div>
                <div className="col-lg-4 col-md-4 col-6 p-4" id="SkillColor">
                <img src={JAVA} alt="JAVA" className="img-fluid" id="SkillColor"/>
                </div>
                <div className="col-lg-4 col-md-4 col-6 p-4" id="SkillColor">
                <img src={PYTHON} alt="PYTHON" className="img-fluid" id="SkillColor"/>
                </div>
                <div className="col-lg-4 col-md-4 col-6 p-4" id="SkillColor">
                <img src={NODEJS} alt="NODEJS" className="img-fluid" id="SkillColor"/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Skills;
