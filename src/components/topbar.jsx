import React from "react";
import { Link } from "react-router-dom";
import "../styles/topbar.css";

function TopBar(){

  const isAdmin = false;

  return(
   <div className="topbar-wrapper">

  <div className="bg-light py-1 border-bottom topbar">
    <div className="container d-flex justify-content-between">
      <small>Super Value Deals - Save more with coupons</small>
      <span>English</span>
    </div>
  </div>

  <div className="py-3 border-bottom header">
    <div className="container d-flex align-items-center justify-content-between">

      <h4 className="fw-bold text-success m-0 logo">FreshCart</h4>

      <div className="d-flex w-50 search-box">
        <input
          className="form-control me-2"
          placeholder="Search for products"
        />
        <button className="btn btn-outline-secondary">
          <i className="bi bi-search"></i>
        </button>
      </div>

      <div className="d-flex gap-3 fs-5 icons">
        <i className="bi bi-heart"></i>
        <i className="bi bi-person"></i>
        <i className="bi bi-cart"></i>
      </div>

    </div>
  </div>

  <nav className="navbar navbar-expand-lg bg-white shadow-sm nav-section">
    <div className="container">

      <button className="btn btn-success me-3">
        ☰ All Departments
      </button>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="menu">
        <ul className="navbar-nav">

          <li className="nav-item"><a className="nav-link">Home</a></li>
          <li className="nav-item"><a className="nav-link">Shop</a></li>
          <li className="nav-item"><a className="nav-link">Stores</a></li>
          <li className="nav-item"><a className="nav-link">Mega menu</a></li>
          <li className="nav-item"><a className="nav-link">Pages</a></li>

          {!isAdmin && (
            <li className="nav-item">
              <Link className="nav-link" to="/pages/admin">Account</Link>
            </li>
          )}

        </ul>
      </div>

    </div>
  </nav>

</div>
  );
}

export default TopBar;