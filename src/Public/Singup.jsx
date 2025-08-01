import React from 'react';

export default function Signup() {
  return (
<<<<<<< Updated upstream
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "90vh", background: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)" }}>
      <div className="card shadow-lg p-4" style={{ maxWidth: 420, width: "100%", borderRadius: "1.5rem" }}>
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#2d3a4b" }}>Create Account</h2>
        <form>
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
            <div className="input-group">
              <select className="form-select" style={{ maxWidth: 100 }} defaultValue="+91" id="countryCode" required>
                <option value="+91">🇮🇳 +91</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+61">🇦🇺 +61</option>
                <option value="+971">🇦🇪 +971</option>
                {/* Add more country codes as needed */}
              </select>
              <input type="number" className="form-control" id="mobile" placeholder="xxxxxxxxxx" required />
            </div>
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
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-lg rounded-pill mt-2" style={{ background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)", border: "none" }}>
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
=======
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
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required/>
        </div>
        <button type="submit" class="btn btn-primary">SUBMIT</button>
      </form>

  
    </div>
    
    
    </>
  )
}
>>>>>>> Stashed changes
