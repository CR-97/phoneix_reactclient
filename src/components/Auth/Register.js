import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from './UserFunctions';

function Register() {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const onChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = e => {
    e.preventDefault();
    const { first_name, last_name, email, password } = form;
    if (!first_name || !last_name || !email || !password) {
      alert('All fields are required');
      return;
    }
    register(form).then(() => navigate('/login'));
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5 auth-card">
          <h1>Create Account</h1>
          <form noValidate onSubmit={onSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                className="form-control"
                name="first_name"
                id="first_name"
                placeholder="Enter First Name"
                value={form.first_name}
                onChange={onChange}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                className="form-control"
                name="last_name"
                id="last_name"
                placeholder="Enter Last Name"
                value={form.last_name}
                onChange={onChange}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Enter Email"
                value={form.email}
                onChange={onChange}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                placeholder="Enter Password"
                value={form.password}
                onChange={onChange}
              />
            </div>
            <button type="submit" className="btn btn-lg btn-primary w-100 mt-2">
              Register
            </button>
            <p className="text-center mt-3" style={{ color: '#888', fontSize: '0.9rem' }}>
              Already have an account?{' '}
              <Link to="/login" style={{ color: 'rgb(69,82,110)', fontWeight: '600' }}>
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Register;