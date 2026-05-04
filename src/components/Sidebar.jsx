import React from "react";
import "../styles/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <h4 className="logo">FreshCart</h4>

      <ul className="menu">

        <li><i className="bi bi-house"></i> Dashboard</li>

        <p className="menu-title">Store Management</p>

        <li><i className="bi bi-cart"></i> Products</li>
        <li><i className="bi bi-list"></i> Categories</li>
        <li><i className="bi bi-basket2"></i> Orders</li>
        <li><i className="bi bi-shop"></i> Sellers / Vendors</li>
        <li><i className="bi bi-person"></i> Customers</li>
        <li><i className="bi bi-star"></i> Reviews</li>
        <li><i className="bi bi-arrow-90deg-down"></i> Menu Level</li>

        <p className="menu-title">Site Settings</p>

        <li><i className="bi bi-newspaper"></i> Blog</li>
        <li><i className="bi bi-image"></i> Media</li>
        <li><i className="bi bi-gear"></i> Store Setting</li>

        <p className="menu-title">Support</p>

        <li><i className="bi bi-headphones"></i> Support Ticket</li>
        <li><i className="bi bi-patch-question"></i> Help Center</li>
        <li><i className="bi bi-infinity"></i> How FreshCart Works</li>

        <p className="menu-title">Our Apps</p>

        <li><i className="bi bi-apple"></i> Apple Store</li>
        <li><i className="bi bi-google-play"></i> Google Play Store</li>

      </ul>

    </div>
  );
}

export default Sidebar;