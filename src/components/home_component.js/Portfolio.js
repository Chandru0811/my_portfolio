import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../styles/style.css";
import Incare from "../../assets/Image-19.png";
import Corsesys from "../../assets/Image-20.png";
import Co_Work from "../../assets/Image-21.png";
import Florist from "../../assets/Image-22.png";
import HireYou from "../../assets/Image-23.png";
import InsuranceAgent from "../../assets/Image-24.png";
import AdvantageCare from "../../assets/Image-25.png";
import Real_Estate from "../../assets/Image-26.png";
import Trucklah from "../../assets/Image-27.png";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";

function Portfolio() {
  const [justifyActive, setJustifyActive] = useState("tab1");
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
    <section id="BackgroundBlack">
      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-12">
            <p id="text-8" style={{ margin: "0px", fontWeight: "600" }}>
              my works
            </p>
            <p id="text-4">Portfolio</p>
          </div>
          <div className="col-lg-7 col-md-7 col-12 pt-4">
            <p id="text-3">
              Phasellus et lacus suscipit congue nisl the volutpat magna. donec
              miss the drana risus tincidunt convallis velit orci congue tortor
              eu dignissim ipsum suam non odio. Pellenta esuntion miss the
              imperdiet metus ornare.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5" id="BackgroundBlack">
        <>
          <MDBTabs
            justify
            className=" d-flex align-items-center justify-content-center py-5"
          >
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleJustifyClick("tab1")}
                active={justifyActive === "tab1"}
                id="Design_Tab"
              >
                Designed
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleJustifyClick("tab2")}
                active={justifyActive === "tab2"}
                id="Develop_Tabs"
              >
                Developed
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>

          <MDBTabsContent>
            <MDBTabsPane show={justifyActive === "tab1"}>
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
                <div className="container p-5 bg-light mx-2">
                  <div className="card h-100 d-flex flex-column">
                    <img src={Trucklah} className="card-img-top" alt="Card" />
                  </div>
                </div>

                <div className="container p-5 bg-secondary mx-2">
                  <div className="card h-100 d-flex flex-column">
                    <img src={Trucklah} className="card-img-top" alt="Card" />
                  </div>
                </div>

                <div className="container p-5 bg-dark mx-2">
                  <div className="card h-100 d-flex flex-column">
                    <img src={Trucklah} className="card-img-top" alt="Card" />
                  </div>
                </div>

                <div className="container p-5 bg-light mx-2">
                  <div className="card h-100 d-flex flex-column">
                    <img src={Trucklah} className="card-img-top" alt="Card" />
                  </div>
                </div>

                <div className="container p-5 bg-light mx-2">
                  <div className="card h-100 d-flex flex-column">
                    <img src={Trucklah} className="card-img-top" alt="Card" />
                  </div>
                </div>

                <div className="container p-5 bg-light mx-2">
                  <div className="card h-100 d-flex flex-column">
                    <img src={Trucklah} className="card-img-top" alt="Card" />
                  </div>
                </div>

                <div className="containerp-5 bg-light mx-2">
                  <div className="card h-100 d-flex flex-column">
                    <img src={Trucklah} className="card-img-top" alt="Card" />
                  </div>
                </div>

                <div className="container p-5 bg-light mx-2">
                  <div className="card h-100 d-flex flex-column">
                    <img src={Trucklah} className="card-img-top" alt="Card" />
                  </div>
                </div>

                <div className="container  p-5 bg-light mx-2">
                  <div className="card h-100 d-flex flex-column">
                    <img src={Trucklah} className="card-img-top" alt="Card" />
                  </div>
                </div>
              </Carousel>
            </MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab2"}>
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
                <div className="container p-5 bg-light mx-2">
                  <div className="card h-100 d-flex flex-column">
                    <img src={Incare} className="card-img-top" alt="Incare" />
                  </div>
                </div>

                <div className="container p-5 bg-secondary mx-2">
                  <div className="card h-100 d-flex flex-column" id="DesignedCard">
                    <img src={Corsesys} className="card-img-top" alt="Card" />
                  </div>
                </div>

                <div className="container p-5 bg-dark mx-2">
                  <div className="card h-100 d-flex flex-column">
                    <img src={Co_Work} className="card-img-top" alt="Card" />
                  </div>
                </div>

                <div className="container p-5 bg-light mx-2">
                  <div className="card h-100 d-flex flex-column">
                    <img src={Florist} className="card-img-top" alt="Card" />
                  </div>
                </div>

                <div className="container p-5 bg-secondary mx-2">
                  <div className="card h-100 d-flex flex-column">
                    <img src={HireYou} className="card-img-top" alt="Card" />
                  </div>
                </div>

                <div className="container p-5 bg-dark mx-2">
                  <div className="card h-100 d-flex flex-column">
                    <img src={InsuranceAgent} className="card-img-top" alt="Card" />
                  </div>
                </div>

                <div className="container p-5 bg-light mx-2">
                  <div className="card h-100 d-flex flex-column">
                    <img src={AdvantageCare} className="card-img-top" alt="Card" />
                  </div>
                </div>

                <div className="container p-5 bg-secondary mx-2">
                  <div className="card h-100 d-flex flex-column">
                    <img src={Real_Estate} className="card-img-top" alt="Card" />
                  </div>
                </div>

                <div className="container p-5 bg-dark mx-2">
                  <div className="card h-100 d-flex flex-column">
                    <img src={Trucklah} className="card-img-top" alt="Card" />
                  </div>
                </div>


              </Carousel>
            </MDBTabsPane>
          </MDBTabsContent>
        </>
      </div>
    </section>
  );
}

export default Portfolio;
