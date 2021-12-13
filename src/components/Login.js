import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';

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
          >
            <GoogleOutlined /> Sign In with Google
          </div>

          <br /> <br />

          <div
            className="login-button facebook btn-center"
          >
            <FacebookOutlined /> Sign In with Facebook
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
