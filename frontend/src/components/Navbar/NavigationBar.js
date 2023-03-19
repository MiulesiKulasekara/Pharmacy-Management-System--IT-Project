import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg"

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light ps-5 pe-5">
      <div class="container-fluid justify-content-between">
        {/* <!-- Left elements --> */}
        <div class="d-flex">
          {/* <!-- Brand --> */}
          <Link class="navbar-brand me-2 mb-1 d-flex align-items-center" to="/">
            <img
              src={logo}
              height="35"
              alt="MDB Logo"
              loading="lazy"
            />
          </Link>
        </div>
        {/* <!-- Left elements --> */}

        {/* <!-- Center elements --> */}
        <ul class="navbar-nav flex-row d-none d-md-flex">
          <li class="nav-item me-5 me-lg-1 active">
            <a class="nav-link">Products</a>
          </li>

          <li class="nav-item me-5 ms-3 me-lg-1">
            <a class="nav-link">Order by Prescription</a>
          </li>

          <li class="nav-item me-5 ms-3 me-lg-1">
            <a class="nav-link">About</a>
          </li>

          <li class="nav-item me-5 ms-3 me-lg-1">
            <a class="nav-link">Contact Us</a>
          </li>

          {/* <!--<li class="nav-item me-3 me-lg-1">
          <a class="nav-link" href="#">
            <span><i class="fas fa-users fa-lg"></i></span>
            <span class="badge rounded-pill badge-notification bg-danger">2</span>
          </a>
        </li>--> */}
        </ul>
        {/* <!-- Center elements --> */}

        {/* <!-- Right elements --> */}
        <ul class="navbar-nav flex-row">
          <li class="nav-item me-3 me-lg-1">
            <Link to="/Search">
              <span class="material-symbols-outlined">search</span>
            </Link>
          </li>
          <li class="nav-item me-3 me-lg-1">
            <Link to="/Login">
              <span class="material-symbols-outlined personicon">
                person{" "}
              </span>
            </Link>
          </li>
          <li class="nav-item me-3 me-lg-1">
            <Link to="/ShoppingCart">
              <span class="material-symbols-outlined">
                shopping_cart
              </span>
            </Link>
          </li>
        </ul>
        {/* <!-- Right elements --> */}
      </div>
    </nav>
  );
}

export default Navbar;
