import React from "react";
import Linkedin from "../../assets/image-3.png";
import Github from "../../assets/image-2.png";
import Whatsapp from "../../assets/Image-1.png";

function Footer() {
  return (
    <section id="BackgroundBlack">
      <div class="container-fluid ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 py-5">
              <div className="pb-3">
                <p id="text14">Get in touch</p>
                <p id="text15">
                  chandru08112000@gmail.com
                  <br />
                  +91 9941286931
                </p>
              </div>
              <div className="pb-3">
                <p id="text14">Location</p>
                <p id="text15">
                  Chennai 600 012, Tamilnadu,
                  <br />
                  India.
                </p>
              </div>
              <div className="pb-3">
                <p id="text15">
                  உள்ளுவ தெல்லாம் உயர்வுள்ளல் மற்றது
                  <br />
                  தள்ளினுந் தள்ளாமை நீர்த்து.
                </p>
              </div>
              <img
                src={Linkedin}
                alt="linkedin"
                id="footerImage"
                className="img-fluid "
              />
              <img
                src={Github}
                alt="github"
                id="footerImage"
                className="img-fluid "
              />
              <img
                src={Whatsapp}
                alt="whatsapp"
                id="footerImage"
                className="img-fluid "
              />
            </div>
            <div className="col-lg-6 col-md-6 col-12 py-5">
              <form>
                <textarea
                  class="form-control mb-4"
                  placeholder="Enquire"
                  id="Contactform"
                ></textarea>

                <div className="row">
                  <div className="col-lg-6 col-12">
                    <input
                      type="text"
                      class="form-control mb-4"
                      placeholder="Name"
                      id="Contactform"
                    ></input>
                  </div>

                  <div className="col-lg-6 col-12">
                    <input
                      type="email"
                      class="form-control mb-4"
                      placeholder="Email"
                      id="Contactform"
                    ></input>
                  </div>
                </div>

                <textarea
                  class="form-control mb-4"
                  placeholder="Subject"
                  id="Contactform"
                ></textarea>

                <div className="row mb-3">
                  <div className="col-12 d-flex align-items-center justify content-center">
                    <input
                      style={{ marginRight: "20px" }}
                      type="number"
                      class="form-control mb-4"
                      placeholder=""
                      value="58"
                      id="Contactform"
                      disabled
                    ></input>

                    <p id="text12" style={{ marginRight: "20px" }}>+</p>

                    <input
                      style={{ marginRight: "20px" }}
                      type="number"
                      class="form-control mb-4"
                      placeholder=""
                      value="44"
                      id="Contactform"
                      disabled
                    ></input>

                    <p id="text12" style={{ marginRight: "20px" }}>=</p>

                    <input
                      type="number"
                      class="form-control mb-4"
                      placeholder=""
                      id="Contactform"
                    ></input>
                  </div>
                </div>

                <button id="ContactBtn" className="btn btn-warning">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
