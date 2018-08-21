import React from "react";
import { withRouter } from "react-router-dom";
import SignIn from "./SignIn";

const SignInPage = ({ history }) => <SignIn history={history} />;

export default withRouter(SignInPage);
