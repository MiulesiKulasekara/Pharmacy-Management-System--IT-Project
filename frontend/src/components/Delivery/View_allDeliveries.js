import React, {useState , useEffect,useRef} from "react";
import axios from "axios";
import AdminNavBar from "../Admin/AdminNavBar"
import { PDFExport } from "@progress/kendo-react-pdf";

export default function ViewAlldeliveries(){

    const [deliveries , setDeliveries ] = useState([]);
    const [searchTearm, setSearchTearm] = useState("");
    const [onclickDeleteid,setdeleteId] = useState("");
    
    const [id, setID] = useState("");
    const[deliveredDate,setDeliverydate] = useState("");
    const[status,setStatus] = useState("");


    useEffect(()=>{
        function getDeliveries(){
            axios.get("http://localhost:5000/delivery/viewAllDeliveries").then((res)=>{
                setDeliveries(res.data)
                console.log(res.data)
            }).catch((error)=>{
                alert(error.message)
            });  
        }
        getDeliveries()
        
    },[]);

    const handleDelete = (e) =>{
        axios.delete("http://localhost:5000/delivery/deleteDeliveries/"+e).then(()=>{
            console.log("delete success"+e);
            window.location.reload(true);
        }).catch((error)=>{
            console.log(error);
        })
    }

    const setDeliveryForm = (e) => {
        axios.get("http://localhost:5000/delivery/viewADelivery/"+e).then((res)=>{
            console.log(res.data);
            console.log(res.data.delivery.address);
            
        });
    }

    const updateHandle = (e) => {
      e.preventDefault();
  
      const editdeliveries = {
        deliveredDate,
        status
      };

      axios
      .put("http://localhost:5000/delivery/updateDeliveries/" + id, editdeliveries)
      .then((res) => {
        alert("update successfull");
      })
      .catch((error) => {
        console.log(error);
      });

    }


    const pdfExportComponent = useRef(null)

    const handleExportWithComponent = (event) => {
        pdfExportComponent.current.save()
    }

    return(
      <>
        <AdminNavBar/>
        <div>
        <div
          class="d-flex flex-column flex-grow-1 ps-5 pe-5 pt-3 contentx"
          style={{ height: "93vh" }}
        >
          <h3 class="content-section1 m-0">Deliveries</h3>
  
          <div class="d-flex flex-row align-items-end pt-4 border-bottom border-3 content-section2"></div>
          <div class="content-section3 pt-3 pb-3">

          <button className="btn btn-primary" onClick={handleExportWithComponent}>Generate Report</button>
  
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

          <PDFExport ref={pdfExportComponent} paperSize="A3" margin='100'>

            <table class="table table-striped">
              <thead class="table-dark position-sticky top-0">
                <tr>
                  <th>Customer Name</th>
                  <th>Driver Name</th>
                  <th>Address</th>
                  <th>Delivered date</th>
                  <th>Delivery Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {deliveries && deliveries.filter((val)=>{
                    if(searchTearm == ""){
                        return val
                    }else if(val.cusName.toLowerCase().includes(searchTearm.toLowerCase())){
                        return val
                    }
                }).map((e)=>{
                    return(<tr>
                        <td scope="row">{e.cusName}</td>
                        <td>{e.drivername}</td>
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
                                <a class="dropdown-item" href="#" onClick={()=>setID(e._id)}data-bs-toggle="modal" data-bs-target="#update-form">
                                  Update
                                </a>   
                              </li>
  
                              <li>
                                <a class="dropdown-item" href="#" onClick={()=>setdeleteId(e._id)} data-bs-toggle="modal" data-bs-target="#deleteAlert" >
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

            </PDFExport>

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
              <div class="modal-body">Are you sure you want to delete this payment?</div>
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
                    value={deliveredDate}
                    onChange={(e) => setDeliverydate(e.target.value)}
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
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    type="text"
                    className="form-control"
                    id="address"
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
                      onClick={updateHandle}
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
      </>
    );
  } 