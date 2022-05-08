import React from "react";
import { Box } from "@mui/material";
import logo from "../../assets/logo_cd.webp";

function Logo() {
  return (
    <Box>
      <img src={logo} className="logo-small" alt="Logo Code and Design" />
    </Box>
  );
}

export default Logo;
