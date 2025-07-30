import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  const [Activate, setActivate] = useState("")
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white" >
        <div className="container-fluid">
          <Link class="navbar-brand" to="/">
            <img src="./img/Eshop.png" width="100px" height="30" class="d-inline-block align-top" alt="" />
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item" onMouseEnter={() => setActivate("active")} onMouseLeave={() => setActivate("")}>
                <Link className={`nav-link ${Activate}`} aria-current="page" to="/">Home</Link>
              </li>

              <li className="nav-item" onMouseEnter={() => setActivate("active")} onMouseLeave={() => setActivate("")}>
                <Link className={`nav-link ${Activate}`} aria-current="page" to="/Product">Product</Link>
              </li>

              <li class="nav-item dropdown" onMouseEnter={() => setActivate("active")} onMouseLeave={() => setActivate("")}>
                <Link class={`nav-link  dropdown-toggle ${Activate}`} to="/Login" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  LogIn
                </Link>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to="/Signup">New User Signup</Link></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><Link class="dropdown-item" to="/Login">Old User LogIn</Link></li>
                  <li><Link class="dropdown-item" to="#">View Your Profile</Link></li>
                </ul>
              </li>
            </ul>


            <div className="d-flex">
              <div className="input-group input-group-sm mb-3">
                <input type="text" className="form-control me-2" placeholder="..." aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
              </div>
              
              <div className='ms-2'>
                <Link class="navbar-btn btn btn-sm btn-primary lift ms-auto" to="/Cart">
                  Cart
                </Link>
              </div>

            </div>
          </div>

        </div>
      </nav>
    </>
  )
}
