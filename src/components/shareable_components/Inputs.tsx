import React, { useCallback, useState } from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import isValidInput from "../../utils/validateForm";
import {
  stringsProperties,
  InputsProps,
  isErrorType,
  ValidationType,
} from "../../Interfaces";

function Inputs({
  name,
  helperText,
  label,
  minRows,
  functionOnChange,
  isRequired,
  inputType,
  validation,
}: InputsProps) {
  const [isError, setIsError] = useState<isErrorType | undefined>({
    isError: false,
    msg: ``,
  });

  const validateInput = useCallback((e) => {
    setIsError(() => isValidInput(validation, e.target.value));
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    functionOnChange(e, name);
    if (isError?.isError && e.target.value) {
      setIsError(() => isValidInput(validation, e.target.value));
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#ffffffed",
        padding: "16px 16px 0px 16px",
        borderRadius: "24px",
      }}
    >
      <TextField
        id={name}
        name={name}
        label={label}
        variant="outlined"
        fullWidth
        helperText={isError && isError.msg != "" ? isError.msg : helperText}
        error={isError ? isError.isError : false}
        minRows={minRows}
        multiline={inputType === "textarea"}
        rows={5}
        onChange={handleOnChange}
        onBlur={validateInput}
        required={isRequired}
        type={inputType}
      />
    </Box>
  );
}

export default Inputs;
