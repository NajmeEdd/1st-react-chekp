import React from 'react';
import "./App.css";


function App () {
  return (
    <div className="cont" id="contact">
    <div className="section-content">
      <h1 className="section-header">This is Your <span className="content-header wow fadeIn " data-wow-delay="0.2s" data-wow-duration="2s"> Chance !!</span></h1>
      <h3>Enter Your informations here to win the random lottery</h3>
    </div>
    <div className="contact-section">
    <div className="container">
      <form>
        <div className="col-md-6 form-line">
            <div className="form-group">
              <label for="exampleInputUsername">Your name</label>
              <input type="text" className="form-control" id="" placeholder=" Enter Name"/>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail">Email Address</label>
              <input type="email" className="form-control" id="exampleInputEmail" placeholder=" Enter Email"/>
            </div>	
            <div className="form-group">
              <label for="telephone">Mobile No.</label>
              <input type="tel" className="form-control" id="telephone" placeholder=" Enter your mobile number"/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label for ="description"> Message</label>
              <textarea  className="form-control" id="description" placeholder="Enter Your Message"></textarea>
            </div>
            <div>

              <button type="button" className="btn btn-default submit"><i className="fa fa-paper-plane" ></i>  Send Message</button>
            </div>
            
        </div>
      </form>
    </div>
  </ div>
  </div>
  )}


export default App;