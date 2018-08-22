import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { withFormik } from "formik";
import { database, storage } from "../../firebase";
import RichEditorExample from "../editor/Editor";
import Attachments from "../attachments/Dropzone";
import { EditorState, convertToRaw } from "draft-js";
import Button from "@material-ui/core/Button";

const ArticleFormLayout = ({
  values,
  handleChange,
  handleSubmit,
  setFieldValue,
  isSubmitting,
  status
}) => {
  return (
    <React.Fragment>
      <Typography variant="title" gutterBottom>
        Nuevo Articulo
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            onChange={handleChange}
            value={values.name}
            label="Nombre"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
      </Grid>
      <Attachments values={values.attachments} onChange={setFieldValue} />
      <RichEditorExample
        editorState={values.editorState}
        onChange={setFieldValue}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isSubmitting}
        onClick={handleSubmit}
      >
        Next
      </Button>
      {status &&
        status.success && (
          <Typography variant="title" gutterBottom>
            Succesful upload
          </Typography>
        )}
    </React.Fragment>
  );
};

const ArticleForm = withFormik({
  mapPropsToValues: props => ({
    name: "",
    date: new Date(),
    editorState: new EditorState.createEmpty(),
    attachments: []
  }),

  handleSubmit: (values, { setStatus, resetForm }) => {
    const storageRef = storage.ref();
    values.editorState = convertToRaw(values.editorState.getCurrentContent());
    database
      .ref()
      .child("articles")
      .push(values)
      .then(response => {
        const databaseKey = response.key;
        const articleStorageRef = storageRef.child(`${databaseKey}/`);
        values.attachments.forEach(attachment => {
          articleStorageRef
            .child(attachment.name)
            .put(attachment)
            .then(snapshot => {
              console.log("Uploaded a blob or file!", attachment.name);
            });
        });
      })
      .then(() => {
        resetForm({
          name: "",
          date: new Date(),
          editorState: new EditorState.createEmpty(),
          attachments: []
        });
        setStatus({ success: true });
      });
  }
})(ArticleFormLayout);

export default ArticleForm;
