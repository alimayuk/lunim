import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import testData from "../data/testData";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="testimonials">
      <div className="container">
        <div className="testimonials-head">
          <h1>Our Happy Clients Says About Us</h1>
          <p>
            Our clients staisfaction is our ultimate reward,and their words are
            a testament to the value we bring to their brands.
          </p>
        </div>
        <div className="testimonials-body">
          <Carousel responsive={responsive}>
            {testData.map((item) => (
              <div key={item.id} className="sliders-test">
                <div className="slideLeft">
                  <p>{item.ptext}</p>
                  <h3>{item.name}</h3>
                </div>
                <img src={item.img} alt="" />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="testimonials-footer">
          <h1>Empower your brand with innovative digital solutions</h1>
          <p>Contact us now to discuss your brand's unique goals, and let's embark on a journey of online triumph together.</p>
          <Link>Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
