import React from "react";
import { ValidationType } from "../Interfaces";

const checkSelectors = (values: string[], value: string) => {
  return {
    isError: values.includes(value),
    msg: `This is a mandatory field!`,
  };
};

const checkStrings = (minChar: number, maxChar: number, value: string) => {
  const curValLength = value.length;
  if (minChar > curValLength) {
    return {
      isError: true,
      msg: `Must have at least ${minChar} characters`,
    };
  } else if (maxChar < curValLength) {
    return {
      isError: true,
      msg: `Must have less than ${maxChar} characters`,
    };
  } else {
    return {
      isError: false,
      msg: ``,
    };
  }
};

const isValidInput = (validation: ValidationType, value: string) => {
  const { values, type, minChar, maxChar } = validation;

  //check selectors
  if (type === "selectors" && values.length > 0 && typeof value === "string") {
    return checkSelectors(values, value);
  }

  //check text/textarea inputs (not password, email)
  if (type === "string" && typeof value === "string") {
    return checkStrings(minChar, maxChar, value);
  }
};

export default isValidInput;
