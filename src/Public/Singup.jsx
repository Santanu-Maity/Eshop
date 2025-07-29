import React from 'react'

export default function Singup() {
  return (
    <>
    <div class="container ">
      <form>
        
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">First Name</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Example - Santanu"required/>
        </div>
        
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Last Name</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Example - Maity"required/>
        </div>
        
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Mobile</label>
        <input type="Number" class="form-control" id="exampleFormControlInput1" placeholder="+91 xxxxxxxxxx"required/>
        </div>
        
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">DOB</label>
        <input type="Date" class="form-control" id="exampleFormControlInput1" placeholder="DOB" required/>
        </div>

        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Gender</label>
        <select class="form-select" aria-label="Default select example" required>
        <option selected>Select Your Gender </option>
        <option value="Male">Male</option>
         <option value="Female">Female</option>
        </select>
        </div>
        
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Gender</label>
        <select class="form-select" aria-label="Default select example" required>
        <option selected>Select Your Gender </option>
        <option value="Male">Male</option>
         <option value="Female">Female</option>
        </select>
        </div>

        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required/>
        </div>
        <button type="submit" class="btn btn-primary">SUBMIT</button>
      </form>

  
    </div>
    
    </>
  )
}
