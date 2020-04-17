import React, { Component } from 'react';
import './About.css';
import axios from 'axios';

class  About extends Component 
{
  state ={
    statistics:[]
  }
  componentDidMount(){
    axios.get('js/data.json')
    .then(res=>{
      this.setState({statistics:res.data.statistics})
    })
  }
  render(){
    const {statistics}=this.state;
    const statisticsList=statistics.map((Item)=>{
      return (  
      <div className="col-lg-3 col-6" key={Item.id}>
      <div className="count-box">
        <i className={Item.icon}></i>
        <span data-toggle="counter-up">{Item.num}</span>
      <p>{Item.body}</p>
      </div>
    </div>

      )
    })
    return(
      <section>
      <section id="about" className="about">
      <div className="container">

        <div className="row">
          <div className="col-lg-6">
            <img src="images/about.jpg" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li><i className="fa fa-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="fa fa-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
            </ul>
            <div className="row icon-boxes">
              <div className="col-md-6">
                <i className="fa fa-ravelry"></i>
                <h4>Corporis voluptates sit</h4>
                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <i className="fa fa-cube"></i>
                <h4>Ullamco laboris nisi</h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
      <section id="counts" className="counts">
      <div className="container">

        <div className="row">
    
    {statisticsList}
    
        </div>

      </div>
    </section>
    </section>
  )
  }
  
}
export default About;