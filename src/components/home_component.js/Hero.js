import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import "../../styles/style.css";
import Linkedin from "../../assets/image-3.png";
import Github from "../../assets/image-2.png";
import Whatsapp from "../../assets/Image-1.png";
import HeroImg from "../../assets/Image-4.png";

function Hero() {
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    const strings = ["Developer.", "Designer.", "Freelancer."];
    const typeSpeed = 150;
    const backSpeed = 100;
    let currentStringIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    const typedElement = document.querySelector(".typing");

    const typeNextString = () => {
      const currentString = strings[currentStringIndex];
      if (isDeleting) {
        currentCharIndex--;
      } else {
        currentCharIndex++;
      }

      const textToShow = currentString.substring(0, currentCharIndex);
      typedElement.textContent = textToShow;

      if (!isDeleting && currentCharIndex === currentString.length) {
        isDeleting = true;
        setTimeout(typeNextString, typeSpeed * 2); // Pause before deleting
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentStringIndex = (currentStringIndex + 1) % strings.length;
        setTimeout(typeNextString, typeSpeed); // Pause before typing next string
      } else {
        const timeout = isDeleting ? backSpeed : typeSpeed;
        setTimeout(typeNextString, timeout);
      }
    };

    typeNextString();
  }, []);

  return (
    <section id="BackgroundBlack">
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-lg-1 col-md-1 col-2 d-flex flex-column align-items-center justify-content-center">
            <a
              href="https://www.linkedin.com/in/chandru-r-5a4baa25b/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Linkedin} alt="linkedin" className="img-fluid pb-5" />
            </a>
            <br />
            <a
              href="https://github.com/Chandru0811"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Github} alt="github" className="img-fluid pb-5" />
            </a>
            <br />
            <a
              href="https://api.whatsapp.com/send?phone=919941286931"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Whatsapp} alt="whatsapp" className="img-fluid pb-5" />
            </a>
          </div>
          <div className="col-lg-5 col-md-5 col-10 d-flex flex-column align-items-center justify-content-center">
            <img src={HeroImg} alt="HeroImg" className="img-fluid pb-5" />
          </div>
          <div className="col-lg-6 col-md-6 col-12 d-flex flex-column justify-content-center">
            <p id="text-1">Hello, I'm</p>
            <p id="text-2">Chandru </p>
            <p id="text-1" className="pb-5">
              Im a Creative {""}
              <span
                style={{ color: "var(--secondary-color)" }}
                className="typing"
              ></span>
            </p>
            <p id="text-3" className="pb-5">
              I am a passionate software developer and designer, driven by the
              endless possibilities of creating visually stunning interfaces and
              transforming complex ideas into elegant and functional solutions.
            </p>
            <div>
              <button
                className="button-background-move"
                onClick={() => setModalShow(true)}
              >
                Let's Collaborate on Your Next Project
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <p id="text16">HAVE A PROJECT?</p>
            <p id="text17">
              I’m ready to help you. You just type details below, and/or send us
              a file.
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-8 col-md-8 col-12">
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

                    <p id="text12" style={{ marginRight: "20px" }}>
                      +
                    </p>

                    <input
                      style={{ marginRight: "20px" }}
                      type="number"
                      class="form-control mb-4"
                      placeholder=""
                      value="44"
                      id="Contactform"
                      disabled
                    ></input>

                    <p id="text12" style={{ marginRight: "20px" }}>
                      =
                    </p>

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
            <div className="col-lg-4 col-md-4 col-12"></div>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default Hero;
