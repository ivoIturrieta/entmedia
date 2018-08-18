import React from "react";
import EnterpreurBottomToolbar from "./BottomToolbar";
import EnterpreurTopToolbar from "./TopToolbar";

const Header = () => {
  return (
    <span>
      <EnterpreurTopToolbar />
      <EnterpreurBottomToolbar />
    </span>
  );
};

export default Header;
