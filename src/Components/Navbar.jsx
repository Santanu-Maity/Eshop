import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <> 
    <nav className="navbar navbar-expand-lg navbar-light  ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Eshop</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Travels</Link>
        </li>
        
        
        <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Product">Product</Link>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" to="/Login" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" to="/Login">Login</a></li>
            <li><hr class="dropdown-divider"/></li>

            <li><Link class="dropdown-item" to="/Signup">New User Signup</Link></li>
            <li><a class="dropdown-item" to="#">View Your Profile</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
     

    </div>
  </div>
</nav>
    </>
  )
}
