import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from './UserFunctions';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmit = e => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please Enter Email and Password');
      return;
    }
    login({ email, password }).then(res => {
      if (res) navigate('/');
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5 auth-card">
          <h1>Sign In</h1>
          <form noValidate onSubmit={onSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-lg btn-primary w-100 mt-2">
              Sign In
            </button>
            <p className="text-center mt-3" style={{ color: '#888', fontSize: '0.9rem' }}>
              Don&apos;t have an account?{' '}
              <Link to="/register" style={{ color: 'rgb(69,82,110)', fontWeight: '600' }}>
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Login;