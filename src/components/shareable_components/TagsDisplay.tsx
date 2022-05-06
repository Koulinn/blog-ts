import { Stack } from "@mui/material";
import React from "react";
import { TagsDisplayProps } from "../../Interfaces";
import { Chip } from "@mui/material";
import { Box } from "@mui/system";

function TagsDisplay({ tags, removeTag }: TagsDisplayProps) {
  return (
    <Box>
      <Stack>
        {tags.map((tag) => (
          <Chip label={tag} onDelete={() => removeTag(tag)} />
        ))}
      </Stack>
    </Box>
  );
}

export default TagsDisplay;
