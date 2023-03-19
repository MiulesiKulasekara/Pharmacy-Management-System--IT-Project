import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { id } = useParams(); 

  const[deliveries,getdeliveries]=useState([]);

  const[name,setname] = useState("");
  const[address,setaddress] = useState("");
  const[licen,setlicen] = useState("");
  const[nic,setnic] = useState("");
  const[birthday,setbirthday] = useState("");

  const[deliveredDate,setDeliveredDate] = useState("");
  const[status,setStatus] = useState("");
  const[deliveryid,setDeliveryid] = useState("");

  useEffect(() => {

    const getdriver = ()=>{
      axios
      .get("http://localhost:5000/driverprofile/viewAprofile/" + id)
      .then((res) => {
        console.log(res.data.Driver)
        setname(res.data.Driver.name)
        setaddress(res.data.Driver.licen)
        setlicen(res.data.Driver.address)
        setnic(res.data.Driver.nic)
        setbirthday(res.data.Driver.birthDay)
      })
      .catch((error) => {
        console.log(error);
      });

    }

    const setupdateform = (e) =>{
      axios.get("http://localhost:5000/delivery/viewADelivery/"+e).then((res)=>{

        setDeliveredDate(res.data.deliveredDate)
        setStatus(res.data.status)
        setDeliveryid(e)
        

      })
    }

    const getalldeliveries = () => {

      axios.get("http://localhost:5000/delivery/viewAllDeliveries").then((res)=>{

        getdeliveries(res.data)

      }).catch((error)=>{
        console.log(error)
      })

    }

    getdriver();
    getalldeliveries();
    
  }, []);

  const updateHandle = (e) => {
    e.preventDefault();

    const editdeliveries = {
      deliveredDate,
      status
    };

    axios
    .put("http://localhost:5000/delivery/updateDeliveries/" +e, editdeliveries)
    .then((res) => {
      alert("update successfull");
    })
    .catch((error) => {
      console.log(error);
    });

  }


  return (
    <section className="h-100 gradient-custom-2">
      <div className="h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card">
              <div
                className="text-white d-flex flex-row"
                style={{ backgroundColor: "#0367a6", height: "200px" }}
              >
                <div
                  className="ms-4 mt-5 d-flex flex-column"
                  style={{ width: "150px" }}
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image"
                    className="img-fluid img-thumbnail mt-4 mb-2"
                    style={{ width: "150px", zIndex: 1 }}
                  />
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{ zIndex: 1 }}
                  >
                    Edit profile
                  </button>
                </div>
                <div className="ms-3" style={{ marginTop: "130px" }}>
                  <h5>Andy Horwitz</h5>
                  <p>New York</p>
                </div>
              </div>
              <div
                className="p-4 text-black"
                style={{ backgroundColor: "#f8f9fa" }}
              ></div>
              <div className="card-body p-4 text-black">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                   
                          <div className="row">
                            <div className="col-3">
                              <h6>Name</h6>
                              <p className="text-muted">{name}</p>
                            </div>
                            <div className="col-3">
                              <h6>Address</h6>
                              <p className="text-muted">
                              {address}
                              </p>
                            </div>
                            <div className="col-3">
                              <h6>Licen number</h6>
                              <p className="text-muted">{licen}</p>
                            </div>
                            <div className="col-3">
                              <h6>NIC</h6>
                              <p className="text-muted">{nic}</p>
                            </div>
                            <div className="col-3">
                              <h6>Birthday</h6>
                              <p className="text-muted">{birthday}</p>
                            </div>
                          </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <p className="lead fw-normal mb-0">My deliveries</p>
                </div>

                <form>
                  <div class="input-group">
                    <div class="form-outline">
                      <input
                        type="search"
                        id="form1"
                        placeholder="Search"
                        class="form-control key-input"
                        //onChange={(e)=>setSearchTearm(e.target.value)}
                      />
                      <br />
                    </div>
                  </div>
                </form>

                <table className="table">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col">Customer name</th>
                      <th scope="col">Customer address</th>
                      <th scope="col">Delivered date</th>
                      <th scope="col">Delivery status</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {deliveries && deliveries.filter((val)=>{
                      if(val.driverid==id){
                        return val
                      }
                    }).map((e)=>{
                      return(

                        <tr>
                      <td>{e.cusName}</td>
                      <td>{e.address}</td>
                      <td>{e.deliveredDate}</td>
                      <td>{e.status}</td>
                      <td>
                        <div class="dropdown-end">
                          <a
                            class=""
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <h6 class="material-symbols-outlined m-0">
                              more_vert
                            </h6>
                          </a>
                          <ul class="dropdown-menu">
                            <li>
                              <a
                                class="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#update-form"
                              >
                                Update
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>

                      )
                    })}
                    
                  </tbody>
                </table>

                <div
                  className="modal fade"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                  id="update-form"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4>Update a Delivery</h4>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="mb-3">
                            <lable for="paymentIDInput" className="form-lable">
                              Delivered date
                            </lable>
                            <input
                              // value={deliveredDate}
                              onChange={(e) => setDeliveredDate(e.target.value)}
                              type="text"
                              className="form-control"
                              id="name"
                            ></input>
                          </div>

                          <div className="mb-3">
                            <lable for="paymentIDInput" className="form-lable">
                              Status
                            </lable>
                            <input
                              // value={status}
                              onChange={(e) => setStatus(e.target.value)}
                              type="text"
                              className="form-control"
                              id="address"
                            ></input>
                          </div>

                          <div className="">
                            <div className="modal-footer">
                              <button
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <input
                                type="submit"
                                className="btn btn-primary"
                                onClick={()=>updateHandle(deliveryid)}
                                id="paymentIDInput"
                              ></input>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
