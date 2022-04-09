import { Box } from "@mui/material";
import React from "react";
import Links from "../../shareable_components/Links";

const linksList = [
  {
    path: "/blog",
    text: "Blog",
  },
  {
    path: "/login",
    text: "Login",
  },
  {
    path: "/register",
    text: "Register",
  },
];

const AccessCSS = () => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    gap: "32px",
  };
};

function Access() {
  return (
    <Box sx={AccessCSS}>
      {linksList.map((link) => (
        <Links key={link.path} path={link.path} text={link.text} />
      ))}
    </Box>
  );
}

export default Access;
