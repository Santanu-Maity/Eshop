import React, { useState } from 'react'

export default function Login() {
  const [updateForm, setupdateForm] = useState(false)
  const handelSubmit = () => {
    setupdateForm(true);
  }
  return (

    <>
      {updateForm ?
        <>
          <form className="container bg-secondary p-3">
              <input type="text" className='form-control' placeholder="Enter OTP" />
              <button type="submit" className='btn btn-success'>Submit</button>
          </form>
        </> :
        <form className="container bg-secondary p-3" hidden={updateForm}>
          <div className="mb-3">
            <label htmlFor="userid" className="form-label">User Id</label>
            <input type="text" className="form-control" id="userid" placeholder="" required />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="" required />
          </div>

          <div className="d-flex justify-content-center">
            <button type="button" onClick={handelSubmit} className="btn btn-primary">SUBMIT</button>
          </div>
        </form>
      }
    </>
  )
}
