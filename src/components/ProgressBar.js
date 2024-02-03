// ProgressBar.js
import React from "react";
import LinearProgress from "@mui/material/LinearProgress";

const ProgressBar = ({ value }) => {
  return <LinearProgress variant="determinate" value={value} />;
};

export default ProgressBar;
