import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function DriverLogin() {

  const [data,setData] = useState({
    email: "",
    password: "",
  })

  const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

  const [error, setError] = useState("");
	//const navigate = useNavigate();

  const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/api/ldriver/driverlogin";
			const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      console.log(res.data);
      console.log(res.data._id);
      console.log(res.data.email);
      console.log(res.data.password);
			window.location = "/mydriverProfiles/"+res.data._id;
			//navigate("/login");
      alert("You are successfuly logged to the system");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

  return (
    <section className="bg-white">
      <div className="container bg-white py-5 px-2 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100 bg-white">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5 bg-white">
            <div className="card text-drak logincard">
              <div className="card-body p-5">
                <form onSubmit={handleSubmit}>
                  <div className="mb-md-4 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase text-center">
                      Sign in
                    </h2>
                    <p className="text-dark-50 mb-5 text-center">
                      Login here
                    </p>

                    <div className="form-outline form-dark mb-4">
                      <label className="form-label" for="typeEmailX">
                        Email
                      </label>
                      <input
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        required

                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label" for="typePasswordX">
                        Password
                      </label>
                      <input
                        //placeholder="1234567$Aa"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        required
                      
                      />
                    </div>

                    {error && <div className="error_msg">{error}</div>}

                    <p className="small mb-5 pb-lg-2">
                      <a className="text-dark-50" href="#!">
                        Forgot password?
                      </a>
                    </p>
                    
                    <button
                      className="btn btn-outline-primary btn-block px-5 loginbtn"
                      type="submit"
                      //onSubmit={registerUser}
                    >
                      Sign in
                    </button>
                  </div>
                </form>

                <div>
                  <p className="mb-0 text-center">
                  Don't have an account?{" "}
                    <Link to="/addAplication">Register</Link>
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
