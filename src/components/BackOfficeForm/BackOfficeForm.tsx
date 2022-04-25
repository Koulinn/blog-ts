import { Box, Stack } from "@mui/material";
import React from "react";
import Inputs from "../shareable_components/Inputs";
import useBackOfficeForm from "./useBackOfficeForm";

function BackOfficeForm() {
  const { inputsFields, formValues } = useBackOfficeForm();

  return (
    <Box component="form">
      <Stack spacing={3}>
        {inputsFields.map((field) => {
          const {
            key,
            name,
            helperText,
            label,
            functionOnChange,
            isRequired,
            inputType,
            validation,
            currentValue,
          } = field;
          return (
            <Inputs
              key={key}
              name={name}
              helperText={helperText}
              label={label}
              functionOnChange={functionOnChange}
              isRequired={isRequired}
              inputType={inputType}
              validation={validation}
              currentValue={currentValue}
            />
          );
        })}
      </Stack>
    </Box>
  );
}

export default BackOfficeForm;
