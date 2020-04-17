import React, { Component } from 'react';
import './Whatwedo.css';
import axios from 'axios';

class Whatwedo extends Component {
  state ={
    Whatwedo:[]
  }
  componentDidMount(){
    axios.get('js/data.json')
    .then(res=>{
      this.setState({Whatwedo:res.data.Whatwedo})
    })
  }
  render (){
    const {Whatwedo}=this.state;
    const TheList=Whatwedo.map((Item)=>{
      return(
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch" key={Item.id}>
        <div className="icon-box">
          <div className="icon"><i className={Item.icon}></i></div>
          <h4><a href="">{Item.title}</a></h4>
          <p>{Item.body}</p>
        </div>
      </div>
      )
    })
    return(
      <div>
       <section id="what-we-do" className="what-we-do">
    <div className="container">

      <div className="section-title">
        <h2>What We Do</h2>
        <p>Magnam dolores commodi suscipit consequatur ex aliquid</p>
      </div>

      <div className="row">
      {TheList}
      </div>

    </div>
  </section>
      </div>
  )
  }
   
}
export default Whatwedo;