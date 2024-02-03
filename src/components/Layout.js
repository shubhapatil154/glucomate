// Layout.js
import React from "react";
import PropTypes from "prop-types";
import Footer from "./Footer";
import ProgressBar from "./ProgressBar";

const Layout = ({ children, progress }) => {
  return (
    <div>
      <ProgressBar value={progress} />
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  progress: PropTypes.number.isRequired,
};

export default Layout;
