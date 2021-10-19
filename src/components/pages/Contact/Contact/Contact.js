import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="main_clr_div">
        <div className="container main_div">
      <div class="container second_div p-5">
       

        <form className="main_form m-auto">
        <h3 className="text-center contact_form">Contact Form</h3>
          <label className="first_name" forHtml="fname">
            First Name
          </label>
          <br />
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your First name.."
          />
          <br />
          <label className="last_name" forHtml="lname">
            Last Name
          </label>
          <br />
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your Last name.."
          />
          <br />
          <label className="country_select" forHtml="country">
            Country
          </label>
          <br />
          <select id="country" name="country">
            <option value="australia">Bangladesh</option>
            <option value="australia">India</option>
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
          <br />
          <label forHtml="report">Comment</label>
          <br />
          <textarea
            id="report"
            name="textarea"
            placeholder=""
            height="200px"
          ></textarea>
          <br />
          <input className="submition_btn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
