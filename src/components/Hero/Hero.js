import Navbar from "../Navbar/Navbar";
import { Button } from "../../Globalstyles";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  HeroContainer,
  HeroContainerHome,
  HeroContent,
  HeroContentText,
  HeroTitle,
  HeroTitleText,
  HeroSubTitle,
  HeroText,
  HeroBtn,
} from "./Hero.styles";

const Hero = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(typeof location.pathname);
  }, [location]);
  return (
    <div>
      <HeroContainer>
        <Navbar />
      </HeroContainer>
    </div>
  );
};

export default Hero;
