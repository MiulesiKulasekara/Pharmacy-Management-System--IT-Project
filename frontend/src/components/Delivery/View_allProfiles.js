import React, { useState } from "react";
import axios from "axios"
// import profilepic from "../img/boy.jpg";

export default function DriverProfiles(){

    

    return(

        <section className="" style={{backgroundColor: "white"}}>
    <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center">
        <div className="">
            <div className="container" style={{borderRadius: ".5rem",backgroundColor: "lightBlue" , width: "500px"}}>
            <div className="">
                <div className="gradient-custom text-center"
                style={{borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem"}}>
                <img src=""
                    alt="Avatar" className="img-fluid my-5" style={{width: "150px" , height: "150px" , borderRadius: "100%"}} />
                <h5>Marie Horwitz</h5>
                <p>marieHorwitz@gmail.com</p>
                <i className="far fa-edit mb-5"></i>
                </div>
                <div className="">
                <div className="p-4">
                    <h6>User Details</h6>
                    <hr className="mt-0 mb-4"/>
                    <div className="row pt-1">
                    <div className="col-6 mb-3">
                        <h6>Licen number</h6>
                        <p className="text-muted">12345678B</p>
                    </div>
                    <div className=" mb-3">
                        <h6>NIC</h6>
                        <p className="text-muted">993212782v</p>
                    </div>
                    <div className=" mb-3">
                        <h6>Phone</h6>
                        <p className="text-muted">077 321 4569</p>
                    </div>
                    <div className=" mb-3">
                        <h6>password</h6>
                        
                        
                        
                    </div>
                    <div className=" mb-3">
                        <h6>Address</h6>
                        <p className="text-muted">No:12,Rilawala,Polgasowita</p>
                    </div>
                    <div className=" mb-3">
                        <h6>Birth date</h6>
                        <p className="text-muted">1999.03.11</p>
                    </div>
                    </div>
                    <button type="button" class="btn btn-primary" style={{marginLeft: "70px"}}>My deliveries</button>
                    <button type="button" class="btn btn-primary" style={{marginLeft: "50px"}}>Edit Profile</button>
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