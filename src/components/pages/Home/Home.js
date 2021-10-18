import React from 'react';
import "./Home.css"
import About from '../Contact/About/About';
const Home = () => {
    return (
      <div>
        <div className="servicess"></div>

        <section className="container pb-5 mt-5">
          <div className="row mt-5">
            <div className="col-12 col-sm-12 col-12 col-md-6 col-lg-6">
              <div className="main_heading">
                <h2 className="headng">
                  {" "}
                  <span className="onli_d">D</span>epression
                </h2>
                <p className="paragrapg">
                  Depression is a common mental disorder affecting more than 264
                  million people worldwide. It is characterized by persistent
                  sadness and a lack of interest or pleasure in previously
                  rewarding or enjoyable activities. It can also disturb sleep
                  and appetite; tiredness and poor concentration are common.
                  Depression is a leading cause of disability around the world
                  and contributes greatly to the global burden of disease. The
                  effects of depression can be long-lasting or recurrent and can
                  dramatically affect a person’s ability to function and live a
                  rewarding life.
                </p>
                <p className="paragraph2">
                  {" "}
                  The causes of depression include complex interactions between
                  social, psychological and biological factors. Life events such
                  as childhood adversity, loss and unemployment contribute to
                  and may catalyse the development of depression.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-12 col-md-6 col-lg-6 ">
              <img
                className="img-fluid img_title"
                src="https://i.ibb.co/D8Kpr2B/Female-doctor-holding-out-hand-isolated-on-white.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
      
         
           
              <About></About>
           
        
      </div>
    );
};

export default Home;