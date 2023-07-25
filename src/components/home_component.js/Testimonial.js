import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Person1 from "../../assets/Image-28.jpg";
import Quotes from "../../assets/Image-29.png";

function Testimonial() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // Number of slides to slide when using arrows
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <section id="Testimonial_c">
    <div class="fixed-background-section">
      <div id="fixed-background-section">
        <div id="test" className="container-fluid">
          <div
            className="row d-flex align-items-center justify-content-center"
            style={{ backgroundColor: "transparent" }}
          >
            <div
              className="col-lg-6 col-md-6 col-12 p-5"
              style={{ backgroundColor: "transparent" }}
            >
              <h2 className="pb-5">
                Need help with professional support? Let's work together!
              </h2>

              <button className="button-background-move">
                chandru08112000@gmail.com
              </button>
            </div>
            <div
              className="col-lg-6 col-md-6 col-12 my-5 p-5"
              style={{ backgroundColor: "#fff" }}
            >
              <p id="Testimonial_heading">What Are Clients Saying?</p>
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000} // Set the auto slide speed in milliseconds
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                renderArrowsWhenDisabled
              >
                <div class="h-100 d-flex flex-column">
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="d-flex align-items-end">
                      <img
                        src={Person1}
                        class="img-fluid"
                        alt="Leela"
                        id="TestimonialImage"
                      />
                      <h3 id="PersonName" className="px-2">
                        Hello
                      </h3>
                    </span>
                    <span>
                      <img src={Quotes} class="img-fluid" alt="Leela" />
                    </span>
                  </div>
                  <p class="py-3" id="Testimonials">
                    Chandru's web development skills are exceptional! He created
                    a stunning website for me, capturing my vision perfectly.
                    Highly recommended!
                  </p>
                </div>

                <div class="h-100 d-flex flex-column">
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="d-flex align-items-end">
                      <img
                        src={Person1}
                        class="img-fluid"
                        alt="Leela"
                        id="TestimonialImage"
                      />
                      <h3 id="PersonName" className="px-2">
                        Hello
                      </h3>
                    </span>
                    <span>
                      <img src={Quotes} class="img-fluid" alt="Leela" />
                    </span>
                  </div>
                  <p class="py-3" id="Testimonials">
                    Chandru's web development skills are exceptional! He created
                    a stunning website for me, capturing my vision perfectly.
                    Highly recommended!Chandru's web development skills are exceptional! He created
                    a stunning website for me, capturing my vision perfectly.
                    Highly recommended!
                  </p>
                </div>

                <div class="h-100 d-flex flex-column">
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="d-flex align-items-end">
                      <img
                        src={Person1}
                        class="img-fluid"
                        alt="Leela"
                        id="TestimonialImage"
                      />
                      <h3 id="PersonName" className="px-2">
                        Hello
                      </h3>
                    </span>
                    <span>
                      <img src={Quotes} class="img-fluid" alt="Leela" />
                    </span>
                  </div>
                  <p class="py-3" id="Testimonials">
                    Chandru's web development skills are exceptional! He created
                    a stunning website for me, capturing my vision perfectly.
                    Highly recommended!
                    Chandru's web development skills are exceptional! He created
                    a stunning website for me, capturing my vision perfectly.
                    Highly recommended!
                  </p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Testimonial;
