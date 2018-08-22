import React from "react";

import Featured from "../featured/Featured";
import SubFeatured from "../featured/SubFeatured";
import MainContent from "../main/Main";

const Home = () => {
  return (
    <React.Fragment>
      <Featured />
      <SubFeatured />
      <MainContent />
    </React.Fragment>
  );
};

export default Home;
