// import React from "react";
import HeroBanner from "./hero-banner/HeroBanner";
import "./HomeStyle.scss";
import CarouselContainer from "./carouselContainer/CarouselContainer";
import { carouselData } from "./HomeData";

function Home() {
  return (
    <div className="homepage">
      <HeroBanner />
      {carouselData.map((item, index) => {
        return (
          <CarouselContainer
            key={index}
            path={item.path}
            name={item.name}
            tabval1={item.tabval1}
            tabval2={item.tabval2}
            endPoint1={item.endPoint1}
            endPoint2={item.endPoint2}
          />
        );
      })}
    </div>
  );
}

export default Home;
