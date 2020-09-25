import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
//import './App.css';
import { render } from 'react-dom';
import Market from './components/Market';
import Order from './components/Order';
import AddGoods from './components/AddGoods';
import './styles/Header.css'



class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div className="app">
          <div className='header'>             
                
                <botton className='hdeaderInfo'>
                    <Link to='/'>商城</Link>
                </botton>
                <botton className='hdeaderInfo'>
                    <Link to='/order'>订单</Link>
                </botton>
                <botton className='hdeaderInfo'>
                  <Link to='/addgoods'>+ 添加商品</Link>
                </botton>                
          </div>
        <Switch>
          <Route exact path='/' component={Market} />
          <Route path='/order' component={Order} />
          <Route path='/addgoods' component={AddGoods} />
      </Switch>
      </div>
    </BrowserRouter>
    );
  }
  
}

export default App;