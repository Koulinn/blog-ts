import { Box } from "@mui/material";

import Links from "../../shareable_components/Links";

const linksList = [
  {
    path: "/blog",
    text: "Blog",
  },
  {
    path: "/backOffice",
    text: "Back-office",
  },
];

const AccessCSS = () => {
  return {
    display: "flex",
    height: "96px",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    gap: "64px",
    minWidth: "360px",
    backgroundColor: "#ffffff85",
    borderRadius: "0px 0px 16px 16px",
    boxShadow: "1px 16px 28px 10px rgba(0,0,0,0.66)",
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
