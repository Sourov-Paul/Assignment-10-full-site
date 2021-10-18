import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
const{doctorName,catagory,description,counrty,img,id}=service;
    return (
      
         
  
      <div className=" col-sm-12 col-md-6 col-lg-4 g-4">
    <div className="card">
      <img className=" img-fluid card-img-top" height="200px" src={img} alt="..."/>
      <div className="card-body">
        <h4 className="card-title">{doctorName}</h4>
        <h5 className="card-title">{catagory}</h5>
        <p className="card-text">{counrty}</p>
        <p className="card-text">{description.slice(0,100)}</p>
<Link to={`/serviceDetails/${id}`}>
<button type="button" className="btn btn-primary">See More..</button>
</Link>
      </div>
    </div>
  </div>
 
  
        
    );
};

export default Service;