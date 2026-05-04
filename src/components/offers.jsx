import React from "react";
import "../styles/offers.css";

function Offers(){
  return(
     <div className="container mt-5">
        <div className="row">

          <div className="col-md-6 mb-3">
            <div className="card border-0 rounded-4 overflow-hidden offer-card">
              <img src="/images/grocery-banner.png" className="offer-img" />

              <div className="card-img-overlay d-flex flex-column justify-content-center align-items-start ps-4">
                <h4>Fruits & Vegetables</h4>
                <p>Get Upto 30% Off</p>
                <button className="btn btn-dark px-3">Shop Now</button>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="card border-0 rounded-4 overflow-hidden offer-card">
              <img src="/images/grocery-banner-2.jpg" className="offer-img" />

              <div className="card-img-overlay d-flex flex-column justify-content-center align-items-start ps-4">
                <h4>Freshly Baked Buns</h4>
                <p>Get Upto 25% Off</p>
                <button className="btn btn-dark px-3">Shop Now</button>
              </div>
            </div>
          </div>

        </div>
      </div>
  );
}

export default Offers;