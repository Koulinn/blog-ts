import { Typography } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

interface LinksProps {
  path: string;
  text: string;
}

function Links({ path, text }: LinksProps) {
  const location = useLocation();

  return (
    <Link
      to={path}
      className={location.pathname.includes(path) ? "active" : undefined}
    >
      <Typography component={"h6"} variant={"h5"}>
        {text}
      </Typography>
    </Link>
  );
}

export default Links;
