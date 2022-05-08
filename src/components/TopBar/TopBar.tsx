import { Box } from "@mui/system";
import React from "react";
import Logo from "../Logo/Logo";
import Access from "./Access/Access";

const topBarCSS = () => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: "64px",
  };
};

function TopBar() {
  return (
    <Box sx={topBarCSS}>
      <Logo />
      <Access />
    </Box>
  );
}

export default TopBar;
