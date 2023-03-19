import React, { useState } from "react";
import axios from "axios"

export default function AddDriverApplication() {

  const [name,setName] = useState("");
  const [licen,setLicen] = useState("");
  const [nic,setNic] = useState("");
  const [email,setEmail] = useState("");
  const [address,setAddress] = useState("");
  const [phone,setPhone] = useState("");
  const [birthDay,setBirthday] = useState("");

  function sendData(e){
    e.preventDefault();
    
    const newApplication = {

      name,
      licen,
      nic,
      email,
      address,
      phone,
      birthDay

    }

    axios.post("http://localhost:5000/driverapplications/addDriverApplication",newApplication).then(()=>{
      alert("New driver application is added")
    }).catch((error)=>{
      alert(error)
    })
    
  }

  return (

    <div className="container w-50">
      <form className="needs-validation" onSubmit={sendData}>
        <br />

        <h2>Application for delivery boys</h2>

        <br />

        <div className="form-outline mb-4">
          <label className="form-label" for="form1Example1">
            Full Name
          </label>
          <input type="text" id="form1Example1" className="form-control" required
          onChange={(e)=>{
            setName(e.target.value);
          }}/>
        </div>

        <div className="form-outline mb-4">
         <label className="form-label" for="form1Example2">
            Licen number
          </label>
          <input type="text" id="form1Example2" className="form-control" required 
          onChange={(e)=>{
            setLicen(e.target.value);
          }}/>
        </div>

        <div className="form-outline mb-4">
         <label className="form-label" for="form1Example1">
            National Identity card number
          </label>
          <input type="text" id="form1Example1" className="form-control" required
          onChange={(e)=>{
            setNic(e.target.value);
          }}/>
        </div>

        <div className="form-outline mb-4">
         <label className="form-label" for="form1Example2">
            Email
          </label>
          <input type="email" id="form1Example2" className="form-control" required
          onChange={(e)=>{
            setEmail(e.target.value);
          }}/>
        </div>

        <div className="form-outline mb-4">
         <label className="form-label" for="form1Example1">
            Address
          </label>
          <input type="text" id="form1Example1" className="form-control" required
          onChange={(e)=>{
            setAddress(e.target.value);
          }}/> 
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" for="form1Example2">
            Phone number
          </label>
          <input type="tel" id="form1Example2" className="form-control" required
          onChange={(e)=>{
            setPhone(e.target.value);
          }}/>
        </div>

        <div className="form-outline mb-4">
         <label className="form-label" for="form1Example1">
            Birth Day
          </label>
          <input placeholder = "1990.02.10" type="text" id="form1Example1" className="form-control" required
          onChange={(e)=>{
            setBirthday(e.target.value);
          }}/>
        </div>

        <div>
          <small id="msg" class="form-text text-muted">
            Your NIC number will be taken as your password.
          </small>
        </div>

        <br />

        <center>
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
        </center>

        <br />
      </form>
      
    </div>
  );
 
}

