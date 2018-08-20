import React from "react";

import Featured from "../featured/Featured";
import SubFeatured from "../featured/SubFeatured";
import MainContent from "../main/Main";

const Home = () => {
  return (
    <span>
      <Featured />
      <SubFeatured />
      <MainContent />
    </span>
  );
};

export default Home;
