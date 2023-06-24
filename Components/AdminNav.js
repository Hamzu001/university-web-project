import Link from 'next/link'
import React from 'react' 



const AdminNav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
  <a className="navbar-brand" href="#">
      <img src="../gmgc-logo-r.png" alt="Logo" width="150" height="40" className="d-inline-block align-text-top"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/admin/addnews">News</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">Gallery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/admin/contactus">Cotact Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/admin/addteacher">Teacher</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">Events</Link>
        </li>
      </ul>
      <form className="d-flex">
        <button className="btn btn-outline-success" type="submit">Logout</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default AdminNav
