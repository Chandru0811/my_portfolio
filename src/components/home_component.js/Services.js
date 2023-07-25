import React from "react";
import { MdOutlineDesignServices } from "react-icons/md";
import { BiCodeBlock } from "react-icons/bi";
import { BsCalendarCheck } from "react-icons/bs";
import '../../styles/style.css';

function Services() {
  return (
  <section id="BackgroundBlack">
    <div className="container py-5" id="services">
      <p id="text-7">My Services</p>
      <div className="row ">
        <div className="col-lg-4 col-md-6 col-12 pt-3" id="serviceHover">
          <div className="card h-100" id="ServiceCard">
            <MdOutlineDesignServices id="ServiceIcon" /><br/>
            <div className="card-body d-flex flex-column" >
              <h5 className="card-title" id="ServiceCardTitle">Design</h5>
              <p className="card-text flex-fill" id="ServiceCardPara">
                I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.{' '}
              </p>
              <span className="d-flex align-items-center justify-content-end">
                <p id="ServiceCardNumber">01</p>
              </span>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12 pt-3">
          <div className="card h-100" id="ServiceCard">
            <BiCodeBlock id="ServiceIcon" /><br/>
            <div className="card-body d-flex flex-column" >
              <h5 className="card-title" id="ServiceCardTitle">Develop</h5>
              <p className="card-text flex-fill" id="ServiceCardPara">
                I can develop the responsive site based on your design and suggestions. I can also develop the site from scratch and consult you during the job.
              </p>
              <span className="d-flex align-items-center justify-content-end">
                <p id="ServiceCardNumber">02</p>
              </span>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12 pt-3">
          <div className="card h-100" id="ServiceCard">
          <BsCalendarCheck id="ServiceIcon1" /><br/>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title" id="ServiceCardTitle">Maintenance</h5>
              <p className="card-text flex-fill" id="ServiceCardPara">
                I can maintain the site based on your needs and suggestions. I can also design, develop and maintain the site from scratch and consult you during the job.
              </p>
              <span className="d-flex align-items-center justify-content-end">
                <p id="ServiceCardNumber">03</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Services;
