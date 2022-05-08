export interface formValuesTypes {
  formData: FormData | null;
  img_url: string;
  text: string;
  tags: string[];
  title: string;
  img_preview: string;
}

export type stringsProperties = "img_url" | "text" | "title" | "tags";

export interface InputsProps {
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

export interface isErrorType {
  isError: boolean;
  msg: string;
}

export interface ValidationType {
  values: string[];
  type: string;
  minChar: number;
  maxChar: number;
}

export interface InputTagsPropsT {
  handleTags: handleTagsInterface;
}

export interface handleTagsInterface {
  handleTags: (e: string) => void;
  tags: string[];
  removeTag: (e: string) => void;
}

export interface TagsDisplayProps {
  tags: string[];
  removeTag: (e: string) => void;
}

export interface uploadCoverPropsT {
  handleImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imgPreview: string;
}
