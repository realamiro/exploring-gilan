import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <Link to="/exploring-gilan/">
        <HomeIcon />
      </Link>
    </nav>
  );
};

export default Navigation;
