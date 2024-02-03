// Summary.js
import React from "react";
import { styled } from "@mui/system";
import dietPlanImage from "../DietPlan.png";
import { useNavigate } from "react-router-dom";

const StyledDietPlan = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
});

const StyledImage = styled("img")({
  width: "100%",
  maxWidth: "400px",
  marginBottom: "20px",
});

const DietPlan = () => {
  const navigate = useNavigate();

  return (
    <StyledDietPlan>
      <StyledImage src={dietPlanImage} alt="Diet Plan" />
    </StyledDietPlan>
  );
};

export default DietPlan;
