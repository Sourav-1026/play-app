import React from "react";
import Banner from "../components/homepage/Banner";
import Footer from "../components/shared/Footer";
import TrendingApps from "../components/homepage/trendingApps/TrendingApps";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <TrendingApps />
    </div>
  );
};

export default HomePage;
