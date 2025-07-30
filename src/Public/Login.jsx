import React from 'react'

export default function Login() {
  return (
    <form className="container bg-secondary bg-gradient p-4">
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">User Id</label>
        <input type="text" className="form-control" id="userid" placeholder="" required />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="text" className="form-control" id="password" placeholder="" required />
      </div>


      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary">SUBMIT</button>
      </div>
    </form>
  )
}
