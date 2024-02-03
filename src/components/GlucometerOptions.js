// GlucometerOptions.js
import React from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyledOptionsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "50px",
  backgroundColor: "white",
  borderRadius: "8px",
});

const StyledButton = styled(Button)({
  margin: "15px",
  width: "300px",
});

const GlucometerOptions = ({ onClose, onManual, onGlucometer }) => {
  return (
    <StyledModal open onClose={onClose}>
      <StyledOptionsContainer>
        <h2>Connect Glucometer and fetch glucose readings in 2 steps...</h2>
        <StyledButton>
          <Button variant="contained" color="primary" onClick={onManual}>
            Enter Manually
          </Button>
        </StyledButton>
        <StyledButton>
          <Button variant="contained" color="primary" onClick={onGlucometer}>
            Get from Glucometer
          </Button>
        </StyledButton>
      </StyledOptionsContainer>
    </StyledModal>
  );
};

export default GlucometerOptions;
