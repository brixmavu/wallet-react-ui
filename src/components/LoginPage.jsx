import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="login-page-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form>
        <p>
          <label htmlFor="email">Email:</label><br />
          <input type="email" id="email" name="email" required />
        </p>
        <p>
          <label htmlFor="password">Password:</label><br />
          <input type="password" id="password" name="password" required />
        </p>
        <p>
          <button type="submit">Login</button>
        </p>
        <p>
          <Link to="/register">Don't have an account yet? Register here</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;