import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { Link } from "react-router-dom";

const styles = theme => ({
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    minWidth: 190,
    minHeight: 190,
    backgroundSize: "contain",
    backgroundPosition: "left"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38,
    color: "#BEBEBE"
  }
});

const Investor = props => {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cover}
          image={props.row.logo}
          title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="headline">{props.row.name}</Typography>
            <Typography variant="subheading" color="textSecondary">
              {props.row.entity}
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <Typography variant="subheading" color="textSecondary">
              Toca Play para ver
            </Typography>
            <IconButton aria-label="Play/pause">
              <Link
                style={{ textDecoration: "none" }}
                to={{
                  pathname: `inversionista/${props.row.id}`,
                  investor: props.row
                }}
              >
                <PlayArrowIcon className={classes.playIcon} />
              </Link>
            </IconButton>
          </div>
        </div>
      </Card>
    </div>
  );
};

Investor.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Investor);
