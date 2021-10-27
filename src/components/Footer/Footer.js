import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="p-3 main_footer">
        <div className="row p-3">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4  text-center">
            <ul className="list1">
              <h2>Contact-Us</h2>
              <li><i className="fas fa-map-marker-alt"></i>Dhaka Bangladesh</li>
              <li><i className="fab fa-google-plus-g"></i> sourovpaul583@gmail.com</li>
              <li><i className=" call fas fa-phone-volume"></i> Mobile: +880164355982</li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4  text-center">
            <ul className="list2">
              <h2>QUICK LINK</h2>
              <li>Health Insurance by Destination</li>
              <li>Schengen Visa</li>
              <li>Travel Insurance by Activity </li>
              <li>Visitiors to U.S.A</li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 text-center">
            <ul className="list3">
              <h2>Social Media</h2>
              <li>
                <i className="fab fa-facebook facebook m-1"></i> Facebook
              </li>
              <li>
                <i className="fab fa-instagram instagram m-1"></i> Instagram
              </li>
              <li>
                <i className="fab fa-linkedin linkedin m-1"></i> LinkedIn
              </li>
              <li>
                <i className="fab fa-whatsapp whatsapp m-1"></i> Whatsapp
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_div"> 
        <div className="container ">
            <div className="row">
                <div className="col">
                    <p className="text-center mt-3"> Made With <i className="love m-1 fas fa-heart"></i><i class="m-2 fas fa-user-md"></i> <span className="world text-bold">World Helth Organization</span></p>
                </div>
            </div>
        </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
