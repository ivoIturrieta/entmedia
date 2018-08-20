import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  card: {
    maxWidth: "100%"
  },
  cardInside: {
    maxWidth: "50%"
  },
  contentWrapper: {
    display: "flex"
  },
  media: {
    height: 0,
    paddingTop: "40.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    weight: 500
  }
});

const InvestorReq = props => {
  return (
    <CardContent className={props.classes.cardInside}>
      <Typography
        className={props.classes.avatar}
        gutterBottom
        variant="headline"
      >
        {props.name}
      </Typography>
      {props.requisitos &&
        props.requisitos.map(ind => {
          return (
            <div>
              <Typography gutterBottom variant="title">
                {ind.title}
              </Typography>
              {ind.requisitos &&
                ind.requisitos.map((req, i) => {
                  return (
                    <Typography paragraph variant="subheading">
                      {i + 1}
                      .- {req}
                    </Typography>
                  );
                })}
            </div>
          );
        })}
    </CardContent>
  );
};

InvestorReq.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InvestorReq);
