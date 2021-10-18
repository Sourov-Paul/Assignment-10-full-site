import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import "./Services.css"
const Services = () => {

    const[services,setServices]=useState([]);

    useEffect(()=>{
        fetch("services.json")
        .then((res) => res.json())
      .then((data) => setServices(data));
    },[ ])


    return (
      <div>
        <div className=" main_container text-center mt-5">
          <h1 className="ourServices mt-5"> Our Services</h1>
        <div className="container main">
          <div className="row">
            {
            services.map((service) =>(<Service key={service.id} service={service}></Service>))
         
           }
           
          </div>
        </div>
        </div>
      </div>
    );
};

export default Services;