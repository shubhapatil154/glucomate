// Footer.js
import React from "react";
import { styled } from "@mui/system";

const StyledFooter = styled("footer")({
  backgroundColor: "lightblue",
  padding: "10px",
  textAlign: "center",
  position: "fixed",
  bottom: 0,
  width: "100%",
});

const Footer = () => {
  return (
    <StyledFooter>
      Glucomate "Control, Care, Connect - Your Health Ally"
    </StyledFooter>
  );
};

export default Footer;
