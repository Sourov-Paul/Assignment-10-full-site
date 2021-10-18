import React from 'react';

const Service = ({service}) => {
const{doctorName,catagory,description,counrty,img}=service;
    return (
        <div>
           <h2> name {doctorName}</h2>
        </div>
    );
};

export default Service;