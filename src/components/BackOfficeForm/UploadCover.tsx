import { Button } from "@mui/material";
import { uploadCoverPropsT } from "../../Interfaces";

const wrapperStyles = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  backgroundColor: "white",
  padding: "16px",
  borderRadius: "24px",
  marginBottom: "24px",
};

function UploadCover({ handleImage, imgPreview }: uploadCoverPropsT) {
  return (
    <div style={wrapperStyles}>
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="contained-button-file"
        multiple
        type="file"
        onChange={handleImage}
      />
      <label htmlFor="contained-button-file">
        <Button variant="outlined" color="primary" component="span">
          Upload Cover
        </Button>
      </label>

      <div>
        <img
          style={{ objectFit: "cover", maxWidth: "100%", maxHeight: "256px" }}
          src={imgPreview}
        />
      </div>
    </div>
  );
}

export default UploadCover;
