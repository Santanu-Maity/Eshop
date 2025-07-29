import React from 'react'

export default function Login() {
  return (
    <>
    <from ClassName="container bg-secondary bg-gradient">
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">User ID</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Mobile or Email"required/>
        </div>
        
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Password</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Password"required/>
        </div>
    </from>
    </>
  )
}
