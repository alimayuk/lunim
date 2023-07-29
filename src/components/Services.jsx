import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PiMagnifyingGlassPlusLight } from "react-icons/pi";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { GiEarthAfricaEurope } from "react-icons/gi";
import Card from "./props/Card";

const Services = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="services">
      <div className="container">
        <div className="service-head">
          <h1>
            Full Service Digital
            <br /> Marketing Agency
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
            tempora enim optio, eius dolorem nostrum nemo sequi? Atque tenetur
            quo, quidem, voluptas incidunt aliquam eius libero a esse inventore
            tempora?
          </p>
        </div>
        <div className="service-body">
          <Carousel responsive={responsive} >
            
            <Card
              icon={<PiMagnifyingGlassPlusLight className="iconCard" />}
              h1text="Search Engine Optimization"
              ptext="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex porro rerum ipsam placeat? Tenetur dicta aliquid assumenda sint, provident fugit error nemo voluptatum harum! Quo at praesentium optio accusantium repudiandae?"
              btntext="Learn More"
            />
            <Card
              icon={<HiArrowTrendingUp className="iconCard" />}
              h1text="Social Meadia Marketing"
              ptext="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex porro rerum ipsam placeat? Tenetur dicta aliquid assumenda sint, provident fugit error nemo voluptatum harum! Quo at praesentium optio accusantium repudiandae?"
              btntext="Learn More"
            />
            <Card
              icon={<LiaLaptopCodeSolid className="iconCard" />}
              h1text="Web Desing & Development"
              ptext="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex porro rerum ipsam placeat? Tenetur dicta aliquid assumenda sint, provident fugit error nemo voluptatum harum! Quo at praesentium optio accusantium repudiandae?"
              btntext="Learn More"
            />
            <Card
              icon={<GiEarthAfricaEurope className="iconCard" />}
              h1text="Social Life"
              ptext="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex porro rerum ipsam placeat? Tenetur dicta aliquid assumenda sint, provident fugit error nemo voluptatum harum! Quo at praesentium optio accusantium repudiandae?"
              btntext="Learn More"
            />
          </Carousel>
          
        </div>
      </div>
    </div>
  );
};

export default Services;
