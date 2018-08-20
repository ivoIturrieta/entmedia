import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import CardPrice from "./CardPrice";
import Maps from "../Maps";

const styles = theme => ({
  card: {
    maxWidth: "100%"
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
    backgroundColor: red[500]
  }
});

class CardExpandable extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, location } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          title={location.cowork.name}
          subheader={location.cowork.location}
        />
        <CardMedia
          className={classes.media}
          image={location.cowork.panoramic}
          title={location.cowork.panoramic}
        />
        <CardContent>
          <Typography component="p">{location.cowork.text.subphoto}</Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
        </CardActions>

        <CardContent>
          <Typography paragraph variant="body2">
            {location.cowork.text.title}
          </Typography>
          <Typography paragraph>{location.cowork.text.paragraph}</Typography>
          <Typography paragraph>
            <Maps
              isMarkerShown
              lat={location.cowork.map.lat}
              lng={location.cowork.map.lng}
            />
          </Typography>
          <Typography>
            <CardPrice prices={location.cowork.prices} />
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

CardExpandable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardExpandable);
