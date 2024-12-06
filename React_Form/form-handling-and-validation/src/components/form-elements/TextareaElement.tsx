import React from "react";
import { FormLabel, FormControl } from "@mui/material";

import { useField } from "formik";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import BalloonEditor from "@ckeditor/ckeditor5-build-balloon";

export const TextareaElement = ({ name }) => {
  const [field, meta, helpers] = useField(name);

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    helpers.setValue(data);
  };

  const EditorConfig = () => {
    return {
      toolbar: ["bold", "italic", "bulletedList", "numberedList", "Link"],
      licenseKey: "GPL",
    }
  };

  return (
    <FormControl fullWidth>
      <FormLabel
        sx={{
          fontSize: "0.7rem",
          paddingBottom: "10px",
        }}>
        Tell us more about yourself
      </FormLabel>

      <div className="border-2 rounded-md top-0">
        <CKEditor
          editor={BalloonEditor as any}
          data=""
          config={EditorConfig()}
          onChange={handleEditorChange}
        />
      </div>
    </FormControl>
  );
};
