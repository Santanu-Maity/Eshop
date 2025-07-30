import React from 'react';

export default function Signup() {
  return (
    <form className="container bg-secondary bg-gradient p-4 ">
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input type="text" className="form-control" id="firstName" placeholder="Example - Santanu" required />
      </div>

      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input type="text" className="form-control" id="lastName" placeholder="Example - Maity" required />
      </div>

      <div className="mb-3">
        <label htmlFor="mobile" className="form-label">Mobile</label>
        <input type="number" className="form-control" id="mobile" placeholder="+91 xxxxxxxxxx" required />
      </div>

      <div className="mb-3">
        <label htmlFor="dob" className="form-label">DOB</label>
        <input type="date" className="form-control" id="dob" required />
      </div>

      <div className="mb-3">
        <label htmlFor="gender" className="form-label">Gender</label>
        <select className="form-select" id="gender" required>
          <option value="">Select Your Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
      </div>

      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary">SUBMIT</button>
      </div>
    </form>
  );
}

