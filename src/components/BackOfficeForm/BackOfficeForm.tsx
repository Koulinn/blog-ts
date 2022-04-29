import { Box, Stack } from "@mui/material";
import React from "react";
import Inputs from "../shareable_components/Inputs";
import useBackOfficeForm from "./useBackOfficeForm";

function BackOfficeForm() {
  const { formValues, handleImage, handleStrings, handleTags } =
    useBackOfficeForm();

  return (
    <Box component="form">
      <Stack spacing={3}>
        <Inputs
          key={"title"}
          name={"title"}
          helperText={"Enter title"}
          label={"Title"}
          functionOnChange={handleStrings}
          isRequired={false}
          inputType={"text"}
          validation={{
            values: [],
            type: "string",
            minChar: 5,
            maxChar: 144,
          }}
          currentValue={formValues.title}
        />
      </Stack>
    </Box>
  );
}

export default BackOfficeForm;
