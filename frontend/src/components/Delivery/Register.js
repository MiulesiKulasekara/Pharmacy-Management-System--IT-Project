import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {

  const [data,setData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: ""
  })

  const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

  const [error, setError] = useState("");
	const navigate = useNavigate();

  const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8070/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
      alert("You are successfuly registered to the system");
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
                      Sign up
                    </h2>
                    <p className="text-dark-50 mb-5 text-center">
                      Create account
                    </p>

                    <div className="form-outline form-dark mb-4">
                      <label className="form-label" for="typeNameX">
                        Name
                      </label>
                      <input
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        type="text"
                        id="typeNameX"
                        className="form-control form-control-lg"
                        required

                      />
                    </div>

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
                        placeholder="1234567$Aa"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        required
                      
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label" for="typeAddressX">
                        Address
                      </label>
                      <input
                        name="address"
                        value={data.address}
                        onChange={handleChange}
                        type="text"
                        id="typeAddressX"
                        className="form-control form-control-lg"
                        required
                      
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label" for="typePhoneX">
                        Phone
                      </label>
                      <input
                        name="phone"
                        value={data.phone}
                        onChange={handleChange}
                        type="text"
                        id="typePhoneX"
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
                      Sign up
                    </button>
                  </div>
                </form>

                <div>
                  <p className="mb-0 text-center">
                  Already have an account?{" "}
                    <Link to="/Login">Login</Link>
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
