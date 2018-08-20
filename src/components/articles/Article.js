import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { articles } from "./ArticleData";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 4
  },
  mainPostContent: {
    padding: `${theme.spacing.unit * 6}px`
  }
});

const Article = props => {
  const { classes } = props;

  return (
    <div>
      <Paper elevation={14} className={classes.root} elevation={1}>
        <div className={props.classes.mainPostContent}>
          <Typography gutterBottom variant="headline" component="h3">
            {articles.article1.heading1}
          </Typography>
          <Typography paragraph component="p">
            {articles.article1.paragraph1}
          </Typography>
          <Typography paragraph component="p">
            {articles.article1.paragraph2}
          </Typography>
          <Typography paragraph component="p">
            {articles.article1.paragraph3}
          </Typography>
          <Typography gutterBottom variant="headline" component="h3">
            {articles.article1.heading2}
          </Typography>
          <Typography paragraph component="p">
            {articles.article1.paragraph4}
          </Typography>
          <Typography variant="body1">{articles.article1.body1}</Typography>
          <Typography variant="body1">{articles.article1.body2}</Typography>
          <Typography variant="body1">{articles.article1.body3}</Typography>
          <Typography variant="body1">{articles.article1.body4}</Typography>
          <Typography paragraph variant="body1">
            {articles.article1.body5}
          </Typography>
          <Typography paragraph variant="body1">
            {articles.article1.body6}
          </Typography>
          <Typography gutterBottom variant="headline" component="h3">
            {articles.article1.heading3}
          </Typography>
          <Typography paragraph variant="body1">
            {articles.article1.body7}
          </Typography>
        </div>
      </Paper>
    </div>
  );
};

Article.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Article);
