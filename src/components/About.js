import React from "react";
import AboutImg from "../assets/images/Aboutimg.webp";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>What Sets Our Food Apart.</h3>
            <p>
            Our food stands out because we blend authentic flavors, fresh ingredients, and passionate craftsmanship to create a truly memorable dining experience. Every dish is thoughtfully prepared to capture the essence of quality and tradition, ensuring that each bite tells a story of care, creativity, and flavor.
            </p>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
