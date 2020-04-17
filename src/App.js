import React, { Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Index from './components/Index/Index';
import Products from './components/Products/Products';
import Details from './components/Details/Details';

class App extends Component {
render(){
  return (
    <div className="App">
  <BrowserRouter>
     <Navbar/>
     <Route exact path="/" component ={Index}/>
     <Route path="/products" component={Products}/>
     <Route path ="/products/:ItemID" component ={Details}/>
    </BrowserRouter>
    </div>
  );
}
}
export default App;
