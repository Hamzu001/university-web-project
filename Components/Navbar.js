import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg p-1" style={{"backgroundColor":"#efefef"}}>
  <div className="container">
    <Link className="navbar-brand" style={{"color":"#be6257"}} href="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link mx-2 active" aria-current="page" style={{"color":"#be6257"}} href="/academic">Academic</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-2 active" style={{"color":"#be6257"}} href="/admission">Admission</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-2 active" style={{"color":"#be6257"}} href="/gallery">Gallery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-2 active" style={{"color":"#be6257"}} href="/events">Events</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-2 active" style={{"color":"#be6257"}} href="/department">Departments</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-2 active" style={{"color":"#be6257"}} href="/programs">Programs</Link>
        </li>
       
        <li className="nav-item">
        <Link style={{"color":"#be6257"}} className="nav-link mx-2 active" href="/news">News</Link>
        </li>
         {/* <li className="nav-item dropdown">
          <Link className="nav-link active dropdown-toggle" style={{"color":"#be6257"}} id="navbarDropdown" role="button" data-bs-toggle="dropdown" href="/about"  aria-expanded="false">
            About Us
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link style={{"color":"#be6257"}} className="dropdown-item" href="/about">About Us</Link></li>
            <li><Link style={{"color":"#be6257"}} className="dropdown-item" href="#">Glimpse of College</Link></li>
            <li><Link style={{"color":"#be6257"}} className="dropdown-item" href="#">Development Team</Link></li>
          </ul>
        </li> */}
        <li className="nav-item">
        <Link style={{"color":"#be6257"}} className="nav-link mx-2 active" href="/about">About Us</Link>
        </li>
        <li className="nav-item">
        <Link style={{"color":"#be6257"}} className="nav-link mx-2 active" href="/contact">Contact Us</Link>
        </li>
      </ul>
      <form className="d-flex">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button> */}
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
