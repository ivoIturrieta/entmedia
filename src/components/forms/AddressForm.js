import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { withFormik } from "formik";
import RichEditorExample from "../editor/Editor";

const AddressForm = ({ values, handleChange, handleSubmit }) => {
  return (
    <React.Fragment>
      <Typography variant="title" gutterBottom>
        Datos de Inversionista / Incubadora
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
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="entidad"
            onChange={handleChange}
            value={values.entity}
            name="entidad"
            label="Entidad"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
      </Grid>
      <RichEditorExample onChange={handleChange} value={values.text} />
    </React.Fragment>
  );
};

const InvestorForm = withFormik({
  mapPropsToValues: props => ({ name: "", entity: "", text: {} }),
  handleSubmit: (values, { props, setSubmitting, setErrors }) => {}
})(AddressForm);

export default InvestorForm;
