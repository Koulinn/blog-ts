import React, { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import {
  handleTagsInterface,
  InputTagsPropsT,
  isErrorType,
} from "../../Interfaces";
import { Button } from "@mui/material";
import TagsDisplay from "./TagsDisplay";

function InputTags({ handleTags, tags, removeTag }: handleTagsInterface) {
  const [isError, setIsError] = useState<isErrorType | undefined>({
    isError: false,
    msg: ``,
  });
  const [tagValue, setTagValue] = useState("");

  const handleTagValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagValue(e.target.value);
  };

  const addTag = () => {
    handleTags(tagValue);
  };

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#ffffffed",
          padding: "16px 16px 0px 16px",
          borderRadius: "24px",
          display: "flex",
        }}
      >
        <TextField
          id={"tags"}
          name={"tags"}
          label={"Tags"}
          variant="outlined"
          fullWidth
          value={tagValue}
          helperText={
            isError && isError.msg != ""
              ? isError.msg
              : "You must add at least a tag"
          }
          error={isError ? isError.isError : false}
          onChange={handleTagValue}
          required={true}
          type={"text"}
          sx={{
            maxWidth: "296px",
          }}
        />
        <Button
          sx={{ marginLeft: "16px", transform: "translateY(-10px)" }}
          onClick={addTag}
        >
          Add tag
        </Button>
      </Box>
      <TagsDisplay tags={tags} removeTag={removeTag} />
    </Box>
  );
}

export default InputTags;
