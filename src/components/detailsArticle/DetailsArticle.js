import React from 'react';
import "./DetailsArticle.css"
const DetailsArticle = ({article}) => {
    const{health,img,dres}=article
    return (
   
           <div className=" card g-4 col-sm-12 col-md-3 col-lg-4 p-3">
            <img className="img-fluid" src={img} alt="" />
            <h3 className="name mt-2">{health}</h3>
            <p className="paragraph">{dres}</p>
           </div>
     
    );
};

export default DetailsArticle;