// Summary.js
import React from "react";
import { styled } from "@mui/system";
import summary from "../Summary.png";
import { useNavigate } from "react-router-dom";

const StyledSummary = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
});

const StyledImage = styled("img")({
  width: "100%",
  maxWidth: "400px", // Adjust the max-width as needed
  marginBottom: "20px",
});

const StyledButton = styled("button")({
  margin: "10px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  backgroundColor: "lightblue",
  border: "none",
  borderRadius: "5px",
  width: "300px",
});

const SendReportButton = styled("button")({
  marginBottom: "50px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  backgroundColor: "lightblue",
  border: "none",
  borderRadius: "5px",
  width: "300px",
});

const Summary = () => {
  const navigate = useNavigate();

  const handleShowDietPlan = () => {
    navigate("/dashboard/diet-plan");
  };

  const handleSendReport = () => {
    navigate("/dashboard/send-report");
  };

  return (
    <StyledSummary>
      <StyledImage src={summary} alt="Summary" />
      <StyledButton onClick={handleShowDietPlan}>Show Diet Plan</StyledButton>
      <SendReportButton onClick={handleSendReport}>
        Send Report
      </SendReportButton>
    </StyledSummary>
  );
};

export default Summary;
