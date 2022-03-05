import React, { useState } from "react";
import { Link } from "react-router-dom";
import videoImg from "../assets/images/video.jpg";
import video from "../assets/video.mp4";
import ReactModal from "react-modal";

const Hero = () => {
  const [isOpen, setOpen] = useState(false);
  const link = "https://github.com/abdelqwy-sayed-ahmed/landing";

  return (
    <div className="hero ">
      <div className="section-one">
        <h1 className="heading" data-aos="zoom-in" data-aos-duration="1500">
          Landing template for <span>startups</span>
        </h1>
        <p className="sub-heading" data-aos="zoom-in" data-aos-duration="2000">
          Our landing page template works on all devices, so you only have to
          set it up once, and get beautiful results forever.
        </p>
      </div>
      <div
        className="section-two"
        data-aos="zoom-in-up"
        data-aos-duration="3000"
      >
        <Link to="/" className="btn-started">
          Get started
        </Link>
        <Link to={{ pathname: link }} className="btn-view" target="_blank">
          View on Github
        </Link>
      </div>
      <div
        className="section-three"
        data-aos="zoom-in-up"
        data-aos-duration="3000"
      >
        <img
          src={videoImg}
          alt="hero-video"
          style={{ padding: "2rem 5rem", cursor: "pointer" }}
          onClick={() => setOpen(true)}
        />
        <ReactModal
          isOpen={isOpen}
          contentLabel="view hero-ivdeo"
          onRequestClose={() => setOpen(false)}
          className="modal"
          overlayClassName="overlay"
          ariaHideApp={false}
        >
          <video src={video} alt="vid" autoPlay controls className="video" />
        </ReactModal>
      </div>
      <div
        className="section-four"
        data-aos="zoom-in-up"
        data-aos-duration="3000"
      >
        <h2>Build up the whole picture</h2>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum — semper quis lectus nulla
          at volutpat diam ut venenatis.
        </p>
      </div>
    </div>
  );
};

export default Hero;
