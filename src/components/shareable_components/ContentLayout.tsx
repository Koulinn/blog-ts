import React from "react";
import { Container, Grid } from "@mui/material";
interface AuxProps {
  children:
    | React.ReactChild
    | React.ReactChild[]
    | React.ReactChildren
    | React.ReactChildren[];
}

function ContentLayout({ children }: AuxProps) {
  return (
    <Container
      sx={{
        backgroundColor: "#dfdfdf4d",
        padding: "64px",
        borderRadius: "24px",
        maxHeight: "calc(94vh - 103px)",
        overflowY: "scroll",
      }}
    >
      <Grid>{children}</Grid>
    </Container>
  );
}

export default ContentLayout;
