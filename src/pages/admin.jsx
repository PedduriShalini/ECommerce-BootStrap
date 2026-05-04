import React from "react";
import Sidebar from "../components/Sidebar";

function Admin() {
  return (
    <div className="d-flex">

      <Sidebar />

      <div className="content p-4" style={{ marginLeft: "250px", width: "100%" }}>

        <nav className="navbar bg-body-tertiary mb-4">
          <div className="container-fluid">
            <form className="d-flex">
              <input className="form-control me-2" placeholder="Search" />
              <button className="btn btn-outline-success">Search</button>
            </form>
          </div>
        </nav>

        <div className="card border-0 rounded-4 overflow-hidden mb-4">
          <img
            src="/images/grocery-banner.png"
            className="w-100"
            style={{ height: "300px", objectFit: "cover" }}
          />

          <div className="card-img-overlay d-flex flex-column justify-content-center align-items-start ps-4">
            <h2>Welcome back! FreshCart</h2>
            <h6 className="text-muted">
              FreshCart is simple & clean design for developer and designer.
            </h6>

            <button className="btn btn-success mt-3 px-4 py-2 rounded-pill">
              Create Product
            </button>
          </div>
        </div>

        <div className="container">
          <div className="row text-center">

            <div className="col-md-4">
              <div className="p-3 stats-card">
                <h6 className="text-muted">Earnings</h6>
                <h2 className="fw-bold">$93,438.78</h2>
                <p className="text-muted mb-0">Monthly revenue</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-3 stats-card">
                <h6 className="text-muted">Orders</h6>
                <h2 className="fw-bold">42,339</h2>
                <p className="text-muted mb-0">35+ New Sales</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-3 stats-card">
                <h6 className="text-muted">Customers</h6>
                <h2 className="fw-bold">39,354</h2>
                <p className="text-muted mb-0">30+ new in 2 days</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Admin;