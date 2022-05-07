import React, { useState, useCallback, useMemo } from "react";
import { formValuesTypes, handleTagsInterface } from "../../Interfaces";
import { stringsProperties } from "../../Interfaces";

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

  const handleTags = useCallback((value: string) => {
    setFormValues((prevValues) => {
      if (!prevValues.tags.includes(value)) {
        return { ...prevValues, tags: [...prevValues.tags, value] };
      } else {
        return prevValues;
      }
    });
  }, []);

  const removeTag = useCallback((value: string) => {
    setFormValues((prevValues) => {
      return {
        ...prevValues,
        tags: prevValues.tags.filter((tag) => value !== tag),
      };
    });
  }, []);

  const handleSubmit = useCallback(
    (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
      } catch (error) {
        console.log(error);
      }
    },
    [formValues]
  );
  return {
    formValues,
    handleImage,
    handleStrings,
    handleTags,
    removeTag,
    handleSubmit,
  };
}

export default useBackOfficeForm;
