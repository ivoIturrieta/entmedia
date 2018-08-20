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
  cardHeader: {
    backgroundColor: theme.palette.grey[100]
  },
  cardPricing: {
    display: "flex",
    alignItems: "baseline",
    marginBottom: theme.spacing.unit * 2
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
          <Card>
            <CardHeader
              title={tier.title}
              subheader={tier.subheader}
              className={classes.cardHeader}
            />
            <CardContent>
              <div className={classes.cardPricing}>
                <Typography variant="display2" color="textPrimary">
                  ${tier.price}
                </Typography>
                <Typography variant="title" color="textSecondary">
                  /mo
                </Typography>
              </div>
              {tier.description.map(line => (
                <Typography variant="subheading" key={line}>
                  {line}
                </Typography>
              ))}
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Button fullWidth variant={tier.buttonVariant} color="primary">
                {tier.buttonText}
              </Button>
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
