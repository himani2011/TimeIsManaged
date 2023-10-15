import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = (props)=> {
  return (
    <div>
        <nav className="navbar fixed-top navbar-dark bg-dark navbar-expand-lg">
      {/* <nav className="navbar fixed-top navbar-dark navbar-expand-lg bg-body-tertiary"> */}
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Schedular</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        {
            !props.auth ? 
        
            <>
        
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Login</NavLink>
        </li>
        
        </>
        
            :
        <>
         <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Logout</NavLink>
        </li>
        </>
        }
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
