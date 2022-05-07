import { Box, Button, Stack, TextField } from "@mui/material";

import Inputs from "../shareable_components/Inputs";
import useBackOfficeForm from "./useBackOfficeForm";

import validation from "./fieldsValidation";
import InputTags from "../shareable_components/InputTags";
import UploadCover from "./UploadCover";

const { titleValidation, postValidation } = validation;

function BackOfficeForm() {
  const {
    formValues,
    handleImage,
    handleStrings,
    handleTags,
    removeTag,
    handleSubmit,
  } = useBackOfficeForm();

  return (
    <Box component="form" onSubmit={handleSubmit}>
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
        <InputTags
          handleTags={handleTags}
          tags={formValues.tags}
          removeTag={removeTag}
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
        <UploadCover handleImage={handleImage} />
      </Stack>
      <Button variant="contained" type="submit">
        Create post
      </Button>
    </Box>
  );
}

export default BackOfficeForm;
