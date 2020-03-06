import React from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/core";
import { BrandTheme } from "@hackoregon/ui-themes";

const Wrapper = ({ children }) => (
  <div>
    <Global styles={BrandTheme} />
    {children}
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Wrapper;
