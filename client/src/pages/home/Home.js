import React from "react";
import BusinessStat from "../../shared/BusinessStat";
import Contact from "./Contact";
import FeaturedProducts from "./FeaturedProducts";
import Reviews from "./Reviews";
import Slider from "./Slider";
import Story from "./Story";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProducts />
      <BusinessStat />
      <Reviews />
      <Story/>
      <Contact/>
    </div>
  );
};

export default Home;
