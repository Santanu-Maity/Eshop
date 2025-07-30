import React from 'react';

export default function Signup() {
  return (
<<<<<<< Updated upstream
    <form className="container bg-secondary bg-gradient p-4 ">
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input type="text" className="form-control" id="firstName" placeholder="Example - Santanu" required />
      </div>
=======
    <>

      <form className="container bg-secondary bg-gradient">
        <div className="fs-5 fw-bold container-xxl ">
          <label for="exampleFormControlInput1" class="form-label">First Name</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Example - Santanu" required />
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
>>>>>>> Stashed changes

      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input type="text" className="form-control" id="lastName" placeholder="Example - Maity" required />
      </div>

      <div className="mb-3">
        <label htmlFor="mobile" className="form-label">Mobile</label>
        <input type="number" className="form-control" id="mobile" placeholder="+91 xxxxxxxxxx" required />
      </div>

<<<<<<< Updated upstream
      <div className="mb-3">
        <label htmlFor="dob" className="form-label">DOB</label>
        <input type="date" className="form-control" id="dob" required />
      </div>
=======
        <div className="fs-5 fw-bold container-xxl">
          <label for="exampleFormControlInput1" class="form-label">DOB</label>
          <input type="Date" class="form-control" id="exampleFormControlInput1" placeholder="DOB" required />
        </div>
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary">SUBMIT</button>
      </div>
    </form>
  );
=======
        <div className="fs-5 fw-bold container-xxl">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required />
        </div>

        <div class="d-flex justify-content-center">
          <button type="submit" class="btn btn-primary">SUBMIT</button>
        </div>

      </form>

   </> 
  )
>>>>>>> Stashed changes
}
