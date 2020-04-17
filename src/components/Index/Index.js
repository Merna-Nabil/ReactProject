import React from 'react';
import './Index.css';
import Home from './../Home/Home';
import Whatwedo from '../Whatwedo/Whatwedo';
import About from './../About/About';
import Services from './../Services/Services';
import Team from '../Team/Team';
import Contact from './../Contact/Contact';


const Index =()=> {
    return (
  <div>
<Home/>
<Whatwedo/>
<About/>
<Services/>
<Team/>
<Contact/>
  </div>
    )
}
export  default Index