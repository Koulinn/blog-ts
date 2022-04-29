import React, { useCallback, useState } from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { ValidationType } from "../../utils/Types/ValidationType";
import isValidInput from "../../utils/validateForm";
import { stringsProperties } from "../BackOfficeForm/useBackOfficeForm";

interface InputsProps {
  name: stringsProperties;
  helperText: string;
  label: string;
  inputType: string;
  isRequired: boolean;
  functionOnChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    property: stringsProperties
  ) => void;
  minRows?: number;
  validation: ValidationType;
  currentValue: string | boolean | number | FormData | null;
}

interface isErrorType {
  isError: boolean;
  msg: string;
}

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
