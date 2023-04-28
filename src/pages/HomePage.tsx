import React from "react";
import Banner from "../components/banner";
import Services from "../components/service";
import { serviceList } from "../constants/services";

const HomePage = () => {
  return (
    <div className="w-full h-screen content-start">
      <Banner />
      <Services data={serviceList} />
    </div>
  );
};

export default HomePage;
