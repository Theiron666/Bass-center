import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./Home.css";
import content from "./Content";

const Home = () => {
  return (
    <Slider autoplay={7000}>
      {content.map((item, index) => (
        <div
          className="image"
          key={index}
          style={{
            background: `url('${item.image}') no-repeat `,
          }}
        >
          <div className="center">
            <div className="title">
              <h1>{item.title}</h1>
            </div>
            <div className="p">
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Home;
