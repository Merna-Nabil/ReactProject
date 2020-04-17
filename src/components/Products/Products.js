import React, { Component } from 'react';
import axios from 'axios';
import './Products.css'

class Products extends Component {
  state ={
    Products:[]
  }
  componentDidMount(){
    axios.get('js/data.json')
    .then(res=>
        {

            this.setState({Products:res.data.Products})
        })
}
    render() {
      const {Products}=this.state;
      const ProductsList =Products.map((productItem)=>{
        return (
          <div className="col-lg-4 col-md-6 portfolio-item " key={productItem.id}>
                  <div className="portfolio-wrap">
                    <figure>
                      <img src={productItem.img} className="img-fluid" alt=""/>
                     
                    </figure>
      
                    <div className="portfolio-info">
                      <h4><a href="#">{productItem.title}</a></h4>
                    <button>{productItem.btn}</button>

                    </div>
                  </div>
                </div>
        )
      })

        return(
            <section id="portfolio" className="portfolio">
            <div className="container">
      
              <div className="section-title">
                <h2>Products</h2>
                <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit</p>
              </div>
      
              <div className="row">
                <div className="col-lg-12">
                  <ul id="portfolio-flters">
                    <li  className="filter-active">All</li>
                    <li >App</li>
                    <li >Card</li>
                    <li >Web</li>
                  </ul>
                </div>
              </div>
      
              <div className="row portfolio-container">
            
                 {ProductsList}
             
      
              </div>
              </div>
           
          </section>
        )
    }
}
export default Products;