import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import imgUrl from '../assets/timg.jpg';
import trolley from '../assets/trolley.jpg';
import '../styles/Market.css'

export default class Market extends Component{   
    state = {
        products: [],
        modalVisible: false
    };

    componentDidMount() {
        fetch(`http://localhost:8080/products`, {
            method: 'GET',
        }).then((res) => res.json())   
        .then((json) => {
            this.setState({
                products: json
            })
        })
        .catch(result => {
            alert("获取失败");
        })
    }
    hideModal = () => {
        this.setState({
            modalVisible: false,
        })
    }
    showModal = () => {
        this.setState({
            modalVisible: true,
        })
    }

    render(){
        var imgObjs = document.getElementsByTagName("img");
        imgObjs.onclick = function () {
            alert("HTML中文网");
          };
        return (
            
            <body>              
                <div className='market'>   
                    <div className="arow">
                        {this.state.products.map((item) => (
                                <div key={item.name}   className = 'cardOne'>
                                    <img src={imgUrl} className="productImg"></img>
                                    <p className="cardTitle">{item.name}</p>
                                    <p className="money">单价：{item.price}/{item.unit}</p>
                                    <div className=" myBottom">
                                        <span >{           }</span>
                                        <button className="addBtn" onClick={this.props.buy}>
                                        add
                                        </button>
                                    </div>
                                </div>
                        ))}
                    </div> 
                    <div className = 'trolley-show'>
                        <div><img src={trolley} className="trolley"/></div>
                        <button className="add-trolley">添加购物车</button>                                                         
                    </div>
                    
                </div>   
                <footer>
                    TW Mall @2018 Created by ForCheng
                </footer>  
           </body>          
        );
    }
}