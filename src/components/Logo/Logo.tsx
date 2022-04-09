import React from "react";
import { Box } from "@mui/material";
import logo from "../../assets/logo_cd.webp";

const LogoCSS = () => {
  return {
    position: "absolute",
    top: "0px",
    left: "0px",
    height: "100%",
  };
};

function Logo() {
  return (
    <Box sx={LogoCSS}>
      <img src={logo} className="logo-small" alt="Logo Code and Design" />
    </Box>
  );
}

export default Logo;
