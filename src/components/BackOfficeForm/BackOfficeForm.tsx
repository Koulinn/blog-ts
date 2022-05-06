import { Box, Stack } from "@mui/material";

import Inputs from "../shareable_components/Inputs";
import useBackOfficeForm from "./useBackOfficeForm";

import validation from "./fieldsValidation";
import InputTags from "../shareable_components/InputTags";

const { titleValidation, postValidation } = validation;

function BackOfficeForm() {
  const { formValues, handleImage, handleStrings, handleTags, removeTag } =
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
          isRequired={true}
          inputType={"text"}
          validation={titleValidation}
          currentValue={formValues.title}
        />
        <Inputs
          key={"text"}
          name={"text"}
          helperText={"Write your thoughts"}
          label={"Post"}
          functionOnChange={handleStrings}
          isRequired={true}
          inputType={"textarea"}
          validation={postValidation}
          currentValue={formValues.title}
        />
        <InputTags
          handleTags={handleTags}
          tags={formValues.tags}
          removeTag={removeTag}
        />
      </Stack>
    </Box>
  );
}

export default BackOfficeForm;
