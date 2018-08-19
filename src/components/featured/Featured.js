import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up("md")]: {
      paddingRight: 0
    }
  }
});

const Featured = props => {
  return (
    <Paper className={props.classes.mainFeaturedPost}>
      <Grid container>
        <Grid item md={6}>
          <div className={props.classes.mainFeaturedPostContent}>
            <Typography
              gutterBottom
              variant="display2"
              color="inherit"
              gutterBottom
            >
              Semilla Corfo abre nueva Convocatoria.
            </Typography>
            <Typography
              gutterBottom
              variant="headline"
              color="inherit"
              paragraph
            >
              Programa entrega $25 millones a emprendedores para poner en marcha
              proyectos de negocio innovadores. Las postulaciones cierran el
              jueves 13 de septiembre a las 16:00 hrs.
            </Typography>
            <Typography variant="title" color="inherit">
              Continue reading...
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

Featured.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Featured);
