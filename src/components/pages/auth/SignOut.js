import React from "react";

import { auth } from "./firebase";

const SignOut = () => (
  <button type="button" onClick={auth.doSignOut}>
    Sign Out
  </button>
);

export default SignOut;
