import React, {useState , useEffect} from "react";
import axios from "axios"
import AdminNavBar from "../Admin/AdminNavBar"

export default function ViewAllApplications(){

    const [applications , setApplications] = useState([]);
    const [searchTearm, setSearchTearm] = useState("");
    
    const [id,setID] = useState("");
    const [name,setName] = useState("");
    const [licen,setLicen] = useState("");
    const [nic,setNic] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [address,setAddress] = useState("");
    const [phone,setPhone] = useState("");
    const [birthDay,setBirthday] = useState("");
    const [onclickDeleteid,setdeleteId] = useState("");

    useEffect(()=>{
        function getApplications(){
            axios.get("http://localhost:5000/driverapplications/viewDriverApplications").then((res)=>{
                setApplications(res.data)
                console.log(res.data)
            }).catch((error)=>{
                alert(error.message)
            });  
        }
        getApplications()
    },[]);

    const addProfile = (e) => {
      e.preventDefault();

      const profile = {
        name,
        licen,
        nic,
        email,
        password,
        address,
        address,
        phone,
        birthDay
      }
      axios.post("http://localhost:5000/driverprofile/addDriverProfile",profile).then((res)=>{
        alert("Profile is created succsessfully")
      }).catch((error)=>{
        console.log(error);
      })
    }

    const handleDelete = (e) =>{
        axios.delete("http://localhost:5000/driverapplications/deleteDriverApplication/"+e).then(()=>{
            console.log("delete success"+e);
            window.location.reload(true);
        }).catch((error)=>{
            console.log(error);
        })
    }

    const setDriverForm = (e)=>{

      axios.get("http://localhost:5000/driverapplications/viewAdriverApplication/"+e).then((res)=>{
          setID(e);
          setName(res.data.driverApplication.name);
          setLicen(res.data.driverApplication.licen);
          setNic(res.data.driverApplication.nic);
          setEmail(res.data.driverApplication.email);
          setPassword("1234567Aa@");
          setAddress(res.data.driverApplication.address);
          setPhone(res.data.driverApplication.phone);
          setBirthday(res.data.driverApplication.birthDay);
          //setName(res.data.driverApplication.name);
          console.log(res.data);
          
      });
    }

    return(
      <>
        <AdminNavBar/>
        <div>
        <div
          class="d-flex flex-column flex-grow-1 ps-5 pe-5 pt-3 contentx"
          style={{ height: "93vh" }}
        >
          <h3 class="content-section1 m-0">All applications for delivery boys</h3>
  
          <div class="d-flex flex-row align-items-end pt-4 border-bottom border-3 content-section2"></div>
          <div class="content-section3 pt-3 pb-3">
  
            <form class="float-end">
              <div class="input-group">
                <div class="form-outline">
                  <input
                    type="search"
                    id="form1"
                    placeholder="Search"
                    class="form-control key-input"
                    onChange={(e)=>setSearchTearm(e.target.value)}
                  />
                </div>
              </div>
            </form>

          </div>
          <div class="bg-white content-section4">
            <table class="table table-striped">
              <thead class="table-dark position-sticky top-0">
                <tr>
                  <th>Name</th>
                  <th>Licen ID</th>
                  <th>NIC</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Birth day</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {applications && applications.filter((val)=>{
                    if(searchTearm == ""){
                        return val
                    }else if(val.name.toLowerCase().includes(searchTearm.toLowerCase())){
                        return val
                    }
                }).map((e)=>{
                    return(<tr>
                        <td scope="row">{e.name}</td>
                        <td>{e.licen}</td>
                        <td>{e.nic}</td>
                        <td>{e.phone}</td>
                        <td>{e.email}</td>
                        <td>{e.address}</td>
                        <td>{e.birthDay}</td>
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
                                <a class="dropdown-item" href="#"  data-bs-toggle="modal" data-bs-target="#add-form" onClick={()=>setDriverForm(e._id)}>
                                  Add
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item btn" onClick={()=>setdeleteId(e._id)}  data-bs-toggle="modal" data-bs-target="#deleteAlert" 
                                >
                                  Delete
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>)
                })}
                      
              </tbody>
            </table>
          </div>
        </div>


        <div
        className="modal fade"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        id="add-form"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4>Create driver profile</h4>
            </div>
            <div className="modal-body">




              <form>


                <div className="mb-3">
                  <lable for="paymentIDInput" className="form-lable">
                    Name
                  </lable>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="form-control"
                    id="name"
                  ></input>
                </div>

                <div className="mb-3">
                  <lable for="paymentIDInput" className="form-lable">
                    Licen number
                  </lable>
                  <input
                    value={licen}
                    onChange={(e) => setLicen(e.target.value)}
                    type="text"
                    className="form-control"
                    id="licen"
                  ></input>
                </div>

                <div className="mb-3">
                  <lable for="paymentIDInput" className="form-lable">
                    NIC
                  </lable>
                  <input
                    value={nic}
                    onChange={(e) => setNic(e.target.value)}
                    type="text"
                    className="form-control"
                    id="nic"
                  ></input>
                </div>

                <div className="mb-3">
                  <lable for="paymentIDInput" className="form-lable">
                    Email
                  </lable>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    id="email"
                  ></input>
                </div>

                {/* <div className="mb-3">
                  <lable for="paymentIDInput" className="form-lable">
                    password
                  </lable>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                    className="form-control"
                    id="password"
                  ></input>
                </div> */}

                <div className="mb-3">
                  <lable for="paymentIDInput" className="form-lable">
                    Address
                  </lable>
                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    className="form-control"
                    id="address"
                  ></input>
                </div>

                <div className="mb-3">
                  <lable for="paymentIDInput" className="form-lable">
                    Phone
                  </lable>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    className="form-control"
                    id="phone"
                  ></input>
                </div>

                <div className="mb-3">
                  <lable for="paymentIDInput" className="form-lable">
                    Birth day
                  </lable>
                  <input
                    value={birthDay}
                    onChange={(e) => setBirthday(e.target.value)}
                    type="text"
                    className="form-control"
                    id="birthDay"
                  ></input>
                </div>

                <div className="">
                  <div className="modal-footer">
                    <button className="btn btn-primary" data-bs-dismiss="modal">
                      Close
                    </button>
                    <input
                      type="submit"
                      className="btn btn-primary"
                      onClick={addProfile}
                      id="paymentIDInput"
                    ></input>
                  </div>
                </div>
              </form>



            </div>
          </div>
        </div>
      </div>

      <div
          class="modal fade"
          id="deleteAlert"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Delete Confirmation
                </h5>
                
              </div>
              <div class="modal-body">Are you sure you want to delete this application?</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  No
                </button>
                <button type="button" class="btn btn-danger" onClick={()=>handleDelete(onclickDeleteid)}>
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>






        
      </div>

      </>
    );
}