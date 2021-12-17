import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import "firebase/compat/app";

import { auth } from '../firebase';
import firebase from "firebase/compat/app";

const Login = () => {
  return (
    <div id="login-page">
      <div id="card">
        <div>
          <h2 class="glass">Welcome to Waver</h2>
        </div>

        <div id="btn-container">
          <div
            className="login-button google btn-center"
            onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
          >
            <GoogleOutlined /> Sign In with Google
          </div>

          <br /> <br />

          <div
            className="login-button facebook btn-center"
            onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
          >
            <FacebookOutlined /> Sign In with Facebook
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
