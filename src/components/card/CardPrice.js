import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  cardPricing: {
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2
  },
  cardActions: {
    [theme.breakpoints.up("sm")]: {
      paddingBottom: theme.spacing.unit * 2
    }
  }
});

const Pricing = props => {
  const { classes } = props;

  return (
    <Grid container spacing={40} alignItems="flex-end">
      {props.prices.map(tier => (
        <Grid item key={tier.title} xs={2} sm={6} md={4}>
          <Card className={classes.cardPricing}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary">
                {tier.title}
              </Typography>
              <Typography variant="headline" component="h2">
                $ {tier.price}
              </Typography>
              <Typography className={classes.pos} color="textSecondary" />
              <Typography paragraph component="p">
                {tier.description}
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

Pricing.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Pricing);
