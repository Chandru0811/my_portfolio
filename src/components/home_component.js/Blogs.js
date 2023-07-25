import React from "react";
import Blog1 from "../../assets/Image-17.png";
import Blog2 from "../../assets/Image-18.png";
import { BiRightArrowAlt } from "react-icons/bi";

function Blogs() {
  return (
    <section id="BackgroundBlack">
    <div className="container py-5">
      <p
        id="text-8"
        className="pt-5"
        style={{ margin: "0px", fontWeight: "600" }}
      >
        recent articles
      </p>
      <p id="text-4">Latest News</p>

      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-lg-5 col-md-5 col-12 pt-3">
          <img src={Blog1} className="card-img-top" id="blogsImg" alt="Blog1" />
        </div>
        <div className="col-lg-2 col-md-2 col-3 pt-3 d-flex flex-column align-items-center justify-content-center">
          <p id="text10">25</p>
          <span id="text11">July 2023</span>
        </div>
        <div className="col-lg-5 col-md-5 col-9 pt-3" id="BlogsPost">
          <p id="text12">X Emerging Technologies to Watch in 2023</p>
          <p id="text13">
            Highlight 5 technologies that are expected to make a significant
            impact in the coming year.
          </p>
          <br />
          <br />
          <button className="button-background-move ">
            Read More <BiRightArrowAlt id="ReadMoreIcon" />
          </button>
        </div>
      </div>

      <div className="row d-flex align-items-center justify-content-center pt-5">
        <div className="col-lg-5 col-md-5 col-12 pt-5 order-md-last">
          <img src={Blog2}  id="blogsImg"  className="card-img-top" alt="Blog1" />
        </div>
        <div className="col-lg-2 col-md-2 col-3 pt-5 d-flex flex-column align-items-center justify-content-center order-md-first">
          <p id="text10">25</p>
          <span id="text11">July 2023</span>
        </div>
        <div className="col-lg-5 col-md-5 col-9 pt-5" id="BlogsPost">
          <p id="text12">X Emerging Technologies to Watch in 2023</p>
          <p id="text13">
            Highlight 5 technologies that are expected to make a significant
            impact in the coming year.
          </p>
          <br />
          <br />
          <button className="button-background-move">
            Read More <BiRightArrowAlt id="ReadMoreIcon" />
          </button>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Blogs;
