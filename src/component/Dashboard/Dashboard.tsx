import React from 'react';
// import $ from "jquery";
import './Dashboard.css';
import {Link} from 'react-router-dom'
export const Dashboard:React.FC=()=>{
    
    
    return(
        <div className="container-fluid">
            <div className="form-1">
                <h5>What's your name?</h5>
               <br/><br/>
                <p>
                    
                        <input 
                            type="text"
                            placeholder="First Name"
                            className="btn btn-outline-secondary"                            
                            required
                        />
                </p>
                <p>
                        <input 
                            type="text"
                            placeholder="Last Name"
                            className="btn btn-outline-secondary"                            
                            required
                        />
                </p>
                <br/>
                <br/>
                <h5>And your gender?</h5>
                
                <div className="button1" > 
                    <button name="gender"  className="button2 active"  value="Male" >Male</button>
                    <button name="gender" className="button2 inactive" value="Female" >Female</button>
                    
               </div>
               
                <h5>What's your date of birth?</h5>
                <h6>This can't be changed later</h6>
                
                <p>
                     <input 
                            type="date"
                            placeholder="DD/MM/YYYY"
                            className="btn btn-outline-secondary"
                            required
                        />
                </p>
                <div className="next2">
                  <Link className="navbar-brand" to="/gallery"><button className="next1">&#10095;</button></Link>
                </div>
            </div>
        </div>
    )
}