import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Trolley from './Trolley';
import imgUrl from '../assets/timg.jpg';
import trolley from '../assets/trolley.jpg';
import '../styles/Market.css'

export default class Market extends Component{   
    state = {
        products: [],
        trolleyVisible: false
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
    showTrolley = () => {
        this.setState({
            trolleyVisible: true,
        })
    }

    dispalyTrolleyInfo = (trolleyVisible) => {
        if(trolleyVisible) {
            return (<Trolley/>);
        }        
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
                        {this.dispalyTrolleyInfo(this.state.trolleyVisible)} 
                        <div><img src={trolley} className="trolley" onClick={this.showTrolley} /></div>                                                                     
                    </div>
                    
                </div>   
                <footer>
                    TW Mall @2018 Created by ForCheng
                </footer>  
           </body>          
        );
    }
}