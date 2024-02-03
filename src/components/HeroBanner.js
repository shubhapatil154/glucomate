// HeroBanner.js
import React from "react";
import { styled } from "@mui/system";
import mascot from "../Mascot.png";

const StyledHeroBanner = styled("div")({
  background: "#deebea",
  height: "300px",
  width: "6000px",
  textAlign: "Center",
  padding: "150px",
  fontFamily: "'Montserrat', sans-serif",
});

const StyledImage = styled("img")({
  maxWidth: "300px",
  marginBottom: "20px",
});

const HeroBanner = () => {
  return (
    <StyledHeroBanner>
      <StyledImage src={mascot} alt="Mascot" />
      <h1>Say Bye to Diabetes in 4 steps...</h1>
    </StyledHeroBanner>
  );
};

export default HeroBanner;
