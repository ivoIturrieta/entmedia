import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { withFormik } from "formik";
import { database } from "../../firebase";
import Attachments from "../attachments/Dropzone";
import RichEditorExample from "../editor/Editor";
import { EditorState, convertToRaw } from "draft-js";

const AddressForm = ({ values, handleChange, handleSubmit, setFieldValue }) => {
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
      <div style={{ padding: "3%" }}>
        <Attachments files={setFieldValue} value={values.attachments} />
      </div>
      <RichEditorExample
        editorState={values.editorState}
        onChange={setFieldValue}
      />
      <button type="submit" onClick={handleSubmit}>
        hola
      </button>
    </React.Fragment>
  );
};

const InvestorForm = withFormik({
  mapPropsToValues: props => ({
    name: "",
    date: new Date(),
    editorState: new EditorState.createEmpty(),
    attachments: []
  }),
  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    values.editorState = convertToRaw(values.editorState.getCurrentContent());
    database
      .ref()
      .child("articles")
      .push(values);
  }
})(AddressForm);

export default InvestorForm;
