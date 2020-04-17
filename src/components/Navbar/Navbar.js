import React from 'react';
import './Navbar.css';
import {Link , NavLink} from 'react-router-dom';

const Navbar =()=>{
    return (
    
       
      <div className="navbar fixed-top">
          <div className="container">  
          
              
                <h3>LUMIA</h3>
                 
                  
                  <ul className="list-unstyled">
                      <li><NavLink to="/">Home</NavLink></li>
                      <li><NavLink to="/products">Products</NavLink></li>
                  </ul>
                  
              
          </div>
          </div> 
         
    
      
    )
}
export default Navbar;