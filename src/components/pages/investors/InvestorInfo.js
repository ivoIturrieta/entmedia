import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import ContentChangeTabs from "../../main/Tabs";

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

class InvestorInfo extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, location } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          title={location.investor.name}
          subheader={location.investor.entity}
        />
        <CardMedia
          className={classes.media}
          image={location.investor.panoramica}
        />
        <ContentChangeTabs investor={location.investor} />
      </Card>
    );
  }
}

InvestorInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InvestorInfo);
