import { Link } from "react-router-dom";

import flogo from "./components/images/footerlogo.svg"


function Footer(){
    return(
        
  <footer class="text-white text-center text-lg-start" style={{background:"#0367A6"}}>
  {/* <!-- Grid container --> */}
  <div class="container p-4 ">
    {/* <!--Grid row--> */}
    <div class="row" style={{background:"#0367A6"}}>
      {/* <!--Grid column--> */}
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <img src={flogo} alt="footer logo"/>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
          molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
          voluptatem veniam, est atque cumque eum delectus sint!
        </p>
      </div>
      {/* <!--Grid column--> */}

      {/* <!--Grid column--> */}
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="">Our Services</h5>

        <ul class="list-unstyled mb-0">
          <li>
          <Link style={{textDecoration:"none",color:"white"}}>Products</Link>
          </li>
          <li>
          <Link style={{textDecoration:"none",color:"white"}}>Order by prescription</Link>
          </li>
          <li>
          <Link style={{textDecoration:"none",color:"white"}}>About</Link>
          </li>
          <li>
          <Link style={{textDecoration:"none",color:"white"}}>Contact-US</Link>
          </li>
          <li>
          <Link to="/DriverLogin" style={{textDecoration:"none",color:"white"}}>Driver Login</Link>
          </li>
          <li>
          <Link to="/AdminLogin" style={{textDecoration:"none",color:"white"}}>Admin</Link>
          </li>
        </ul>
      </div>
      {/* <!--Grid column--> */}

      {/* <!--Grid column--> */}
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="mb-0">Social Links</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!" style={{textDecoration:"none",color:"white"}}>Facebook</a>
          </li>
          <li>
            <a href="#!" style={{textDecoration:"none",color:"white"}}>Instegram</a>
          </li>
          <li>
            <a href="#!" style={{textDecoration:"none",color:"white"}}>Twitter</a>
          </li>
          <li>
            <a href="#!" style={{textDecoration:"none",color:"white"}}>Google</a>
          </li>
        </ul>
      </div>
      {/* <!--Grid column--> */}
    </div>
    {/* <!--Grid row--> */}
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div class="text-center p-3 bg-dark">
    © 2020 Copyright:
    <a class="text-white text-decoration-none" href="#">WPharmacy.com</a>
  </div>
  {/* <!-- Copyright --> */}
</footer>
    );
}

export default Footer;