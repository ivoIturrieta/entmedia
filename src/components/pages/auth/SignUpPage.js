import React from "react";
import { Link, withRouter } from "react-router-dom";
import SignUpForm from "./SignUp";
const SignUpPage = ({ history }) => (
  <div>
    <SignUpForm history={history} />
  </div>
);

export default withRouter(SignUpPage);
