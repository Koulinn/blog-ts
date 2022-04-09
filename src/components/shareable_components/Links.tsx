import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface LinksProps {
  path: string;
  text: string;
}

function Links({ path, text }: LinksProps) {
  return (
    <Link to={path}>
      <Typography component={"h6"} variant={"h5"}>
        {text}
      </Typography>
    </Link>
  );
}

export default Links;
