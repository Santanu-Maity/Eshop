import React, { useState } from 'react';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const natigate = useNavigate();

  console.log(email, password);

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'User login successfully',
    });
  };
  const usererror = () => {
    messageApi.open({
      type: 'error',
      content: 'User login failed',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const userData = {
        email,
        password,
      };
      success();
      setTimeout(() => {
        natigate('/');
      }, 1000);
    } catch (error) {
      usererror();
      return;
    }
  }

  return (
    <>
      {contextHolder}
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "90vh", background: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)" }}>
        <div className="card shadow-lg p-4" style={{ maxWidth: 420, width: "100%", borderRadius: "1.5rem" }}>
          <h2 className="text-center mb-4 fw-bold" style={{ color: "#2d3a4b" }}>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="userid" className="form-label">User Id</label>
              <input type="email" className="form-control" id="userid" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} minLength={8} pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}' required />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-lg rounded-pill mt-2" style={{ background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)", border: "none" }}>
                Submit
              </button>

            </div>

            <div className="text-center mt-3">
              <span>Don't have an account? </span>
              <a href="/signup" className="text-primary fw-bold" style={{ textDecoration: "none" }}>
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}