import { Link } from "react-router-dom";

function AdminNavBar() {
  return (
    <div style={{background:"#0367A6"}}>
    <div className="container" style={{ width: "1vw" , backgroundColor:""}}>
      <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link d-flex me-4 " href="#" style={{color:"white"}}>
                <span class="material-symbols-outlined me-1">dashboard</span>
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex me-4" href="#" style={{color:"white"}}>
                <span class="material-symbols-outlined me-1">person</span>
                Customer
              </a>
            </li>
            <li className="nav-item">
            <a className="nav-link d-flex me-4" href="#" style={{color:"white"}}>
                <span class="material-symbols-outlined me-1">badge</span>
                Employee
              </a>
            </li>
            <li className="nav-item">
            <a className="nav-link d-flex me-4" href="#" style={{color:"white"}}>
                <span class="material-symbols-outlined me-1">description</span>
                Prescription
              </a>
            </li>
            <li className="nav-item">
            <a className="nav-link d-flex me-4" href="#" style={{color:"white"}}>
                <span class="material-symbols-outlined me-1">package</span>
                <Link
                      to="/viewOrders"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                    Orders
                    </Link>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link d-flex me-4"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{color:"white"}}
            
              >
                <span class="material-symbols-outlined me-1" style={{color:"white"}}>local_shipping</span>
                Suppliers
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item">
                  <Link
                      to="/Admin/suppliers"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                    Suppliers
                    </Link>
                    </a>
                </li>
                <li>
                  <a className="dropdown-item">
                    <Link
                      to="/Admin/suplierOrder"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Supplier Orders
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item">
                    <Link
                      to="/Admin/smorderList"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Supplier Orders chandeep
                    </Link>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
            <a className="nav-link d-flex me-4" href="#" style={{color:"white"}}>
                <span class="material-symbols-outlined me-1">medication_liquid</span>
                <Link
                      to="/Admin/productlist"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Product
                    </Link>
                
              </a>
            </li>


            <li className="nav-item dropdown">
            <a className="nav-link d-flex me-4" href="#" style={{color:"white"}} data-bs-toggle="dropdown" aria-expanded="false">
                <span class="material-symbols-outlined me-1">directions_bike</span>
                Delivery
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item">
                    <Link
                      to="/viewAplications"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Applications
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item">
                    <Link
                      to="/viewdeliveries"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Deliveries
                    </Link>
                  </a>
                </li>
              </ul>
            </li>



            <li className="nav-item dropdown">
              <a
                className="nav-link d-flex me-4"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{color:"white"}}
              >
                <span class="material-symbols-outlined me-1">payments</span>
                Payments
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item">
                    <Link
                      to="/Admin/supplierpayments"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Supplier Payments
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item">
                    <Link
                      to="/Admin/employeepayments"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Employee Salary Payments
                    </Link>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    </div>
  );
}

export default AdminNavBar;
