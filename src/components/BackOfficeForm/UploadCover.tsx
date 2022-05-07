import { TextField, Button } from "@mui/material";
import React from "react";

interface uploadCoverPropsT {
  handleImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const wrapperStyles = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

function UploadCover({ handleImage }: uploadCoverPropsT) {
  return (
    <div style={wrapperStyles}>
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="outlined" color="primary" component="span">
          Upload Cover
        </Button>
      </label>

      <div>
        <img
          style={{ objectFit: "cover", maxWidth: "100%", maxHeight: "256px" }}
          src="https://thundersbakery.ie/wp-content/uploads/2020/01/oreo-drip-cake.jpg"
        />
      </div>
    </div>
  );
}

export default UploadCover;
