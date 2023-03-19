import {Link} from "react-router-dom"


function Register() {
  return (
    <section class="bg-white">
      <div class="container py-5 h-100 bg-white">
        <div class="row d-flex justify-content-center align-items-center h-100 bg-white">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5 bg-white">
            <div class="card text-drak logincard">
              <div class="card-body p-5">
                <div class="mb-md-4 mt-md-4 pb-5">
                  <h2 class="fw-bold mb-2 text-uppercase text-center">Register</h2>
                  <p class="text-dark-50 mb-5 text-center">
                    Please enter your details to register!
                  </p>

                  <div class="form-outline form-dark mb-4">
                    <label class="form-label" for="typeEmailX">
                      Name
                    </label>
                    <input
                      type="text"
                      id="typeEmailX"
                      class="form-control form-control-lg"
                    />
                  </div>

                  <div class="form-outline form-dark mb-4">
                    <label class="form-label" for="typeEmailX">
                      Email
                    </label>
                    <input
                      type="email"
                      id="typeEmailX"
                      class="form-control form-control-lg"
                    />
                  </div>

                  <div class="form-outline form-white mb-4">
                    <label class="form-label" for="typePasswordX">
                      Password
                    </label>
                    <input
                      type="password"
                      id="typePasswordX"
                      class="form-control form-control-lg"
                    />
                  </div>


                  <button
                    class="btn btn-outline-primary btn-block px-5 loginbtn"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>

                <div>
                  <p class="mb-0 text-center">
                    Already have an account? <Link to="/Login">Login</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
