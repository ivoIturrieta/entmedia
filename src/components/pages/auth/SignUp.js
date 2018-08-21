import React, { Component } from "react";
import { auth } from "./firebase";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class SignUpForm extends Component {
  state = { ...INITIAL_STATE };
  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
    const a = auth;

    const { history } = this.props;

    return auth
      .createUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        history.push("/home");
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });
  };
  render() {
    const { username, email, passwordOne, passwordTwo } = this.state;
    const { classes } = this.props;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography variant="headline">Sign Up</Typography>
            <div className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel>Full Name</InputLabel>
                <Input
                  value={username}
                  onChange={event =>
                    this.setState(byPropKey("username", event.target.value))
                  }
                  id="fullName"
                  name="fullName"
                  autoFocus
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  value={email}
                  onChange={event =>
                    this.setState(byPropKey("email", event.target.value))
                  }
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="passwordOne">Password</InputLabel>
                <Input
                  value={passwordOne}
                  onChange={event =>
                    this.setState(byPropKey("passwordOne", event.target.value))
                  }
                  name="passwordOne"
                  type="passwordOne"
                  id="passwordOne"
                  autoComplete="current-password"
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="passwordTwo">Confirm Password</InputLabel>
                <Input
                  value={passwordTwo}
                  onChange={event =>
                    this.setState(byPropKey("passwordTwo", event.target.value))
                  }
                  name="passwordTwo"
                  type="passwordTwo"
                  id="passwordTwo"
                  autoComplete="current-password"
                />
              </FormControl>
              <Button
                onClick={this.onSubmit}
                fullWidth
                variant="raised"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
            </div>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SignUpForm);
