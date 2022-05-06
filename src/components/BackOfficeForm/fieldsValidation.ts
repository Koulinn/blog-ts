const titleValidation = {
  values: [],
  type: "string",
  minChar: 5,
  maxChar: 144,
};

const postValidation = {
  values: [],
  type: "string",
  minChar: 50,
  maxChar: 1400,
};

const validation = { titleValidation, postValidation };

export default validation;
