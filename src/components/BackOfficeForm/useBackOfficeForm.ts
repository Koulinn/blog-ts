import React, { useState, useCallback, useMemo } from "react";

interface formValuesTypes {
  formData: FormData | null;
  img_url: string;
  text: string;
  tags: string[];
  title: string;
}

export type stringsProperties = "img_url" | "text" | "title";

function useBackOfficeForm() {
  const [formValues, setFormValues] = useState<formValuesTypes>({
    formData: null,
    img_url: "",
    text: "",
    tags: [],
    title: "",
  });

  const handleImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const formData = new FormData();
      formData.append("postImg", e.target.files[0]);
      setFormValues((prevValues) => {
        return { ...prevValues, formData: formData };
      });
    }
  }, []);

  const handleStrings = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, property: stringsProperties) => {
      setFormValues((prevValues) => {
        return { ...prevValues, [property]: e.target.value };
      });
    },
    []
  );

  const handleTags = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevValues) => {
      if (!prevValues.tags.includes(e.target.value)) {
        return { ...prevValues, tags: [...prevValues.tags, e.target.value] };
      } else {
        return prevValues;
      }
    });
  }, []);

  return { formValues, handleImage, handleStrings, handleTags };
}

export default useBackOfficeForm;
