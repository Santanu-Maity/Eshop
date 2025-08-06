import React, { useState } from 'react';
import { message, Select } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [fullname, setFname] = useState('');
  const [contact, setContact] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  const natigate = useNavigate();

  const genderoptions = [
    { value: 'select', label: 'select' },
    {
      value: 'male',
      label: 'Male',
    },
    {
      value: 'female',
      label: 'Female',
    },
  ];

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'User registered successfully',
    });
  };
  const usererror = () => {
    messageApi.open({
      type: 'error',
      content: 'User registration failed',
    });
  };

  const passerror = () => {
    messageApi.open({
      type: 'error',
      content: 'Passwords do not match with confirm password',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      passerror();
      return;
    }
    try {
      const userData = {
        fullname,
        contact,
        gender,
        email,
        password,
      };
      console.log(userData);
      success();
      setTimeout(() => {
        natigate('/login');
      }, 1000);
    } catch (error) {
      usererror();
      return;
    }
  }

  return (
    <>
      {contextHolder}
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)",
          padding: "1rem",
        }}
      >
        <div className="row justify-content-center w-100">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7">
            <div
              className="card shadow-lg p-4"
              style={{ borderRadius: "1.5rem", backgroundColor: "#fff" }}
            >
              <h2 className="text-center mb-4 fw-bold" style={{ color: "#2d3a4b" }}>
                Create Account
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  {/* Left Column */}
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <label className="form-label" htmlFor='fname'>Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id='fname'
                        placeholder="Rohit Das"
                        required
                        onChange={(e) => setFname(e.target.value)}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label" htmlFor='contact'>Contact</label>
                      <input
                        type="tel"
                        minLength={10}
                        maxLength={10}
                        id='contact'
                        className="form-control"
                        placeholder="9876543210"
                        pattern="[6-9]{1}[0-9]{9}"
                        required
                        onChange={(e) => setContact(e.target.value)}
                      />
                    </div>

                    <div className='mb-3'>
                      <label className="form-label" htmlFor='password'>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="********"
                        required
                        id='password'
                        pattern='(?=.*[A-Za-z])(?=.*\d){8,}'
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <label className="form-label" htmlFor='gender'>Sex</label>
                      <Select id='gender' className='form-control' onChange={(e) => setGender(e)} defaultValue={genderoptions[0]} options={genderoptions} />
                    </div>

                    <div className="mb-3">
                      <label className="form-label" htmlFor='email'>Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="name@example.com"
                        required
                        id='email'
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className='mb-3'>
                      <label className="form-label" htmlFor='cpassword'>Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="********"
                        required
                        id='cpassword'
                        pattern='(?=.*[A-Za-z])(?=.*\d){8,}'
                        onChange={(e) => setCpassword(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="d-grid mt-3">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg rounded-pill"
                    style={{
                      background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
                      border: "none",
                    }}
                  >
                    SUBMIT
                  </button>
                </div>

                <div className="text-center mt-3">
                  <span>Already Have an Account? </span>
                  <a
                    href="/Login"
                    className="text-primary fw-bold"
                    style={{ textDecoration: "none" }}
                  >
                    Login
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}