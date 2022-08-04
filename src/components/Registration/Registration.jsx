import React, { Component } from 'react';
import './Registration.css'
import loginBanner from './img/registration-banner.png'

class Registration extends Component {
    render() {
        return (
            <div className="Log">
              <div className="row">
                <div className="col-md-4"><img src={loginBanner}/></div>
                <div className="col-md-8  d-flex justify-content-center align-items-center">
                  <div className="Registration-box">
                    <p className="Registration-headline">Scripto</p>
                    {/* <a><img /></a> */}
                    <div className="Registration-form">
                      <div>
                        <form className="">
                          <div className="">
                            <input type="text" name="name" placeholder="First Name" />
                            <input type="text" name="name" placeholder="Last Name" />
                          </div>
                          
                          <div className=" p-3 text-center"> 
                          <input type="text" name="name" placeholder="First Name" className="rr" />
                          <input type="text" name="name" placeholder="Last Name" className="rr" />
                          <input type="submit" value="Submit" />
                          <p><a>Already Registered? LOGIN</a></p>
                          </div>
                        </form>
                     
                      </div>
                    </div>
                  </div>
                </div>
              </div>      
              
            </div>
        );
    }
}

export default Registration;