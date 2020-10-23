import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import imgUrl from '../assets/timg.jpg';
import '../styles/Market.css'

const url = 'http://localhost:8080/products';
let myHeaders = new Headers({
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'text/plain'
});

export default class Market extends Component{   
     constructor() {
         super();
         this.state = {
           products: [
             { name: '可乐1', price: '单价：1元/瓶' },
             { name: '可乐2', price: '单价：1元/瓶' },
             { name: '可乐3', price: '单价：1元/瓶' },
             { name: '可乐4', price: '单价：1元/瓶' },
             { name: '可乐5', price: '单价：1元/瓶' },
             { name: '可乐6', price: '单价：1元/瓶' },
           ],
           orders: [],
         };
     }

    //  componentWillMount(){        
    //     fetch(url, {
    //         method:"POST",
    //         headers: myHeaders,
    //         mode: 'cors',
    //     })
    //     .then((res) => res.json())
    //     .then((json) => {
    //         this.setState({
    //             products: json,
    //         })
    //     });
    //  }

     componentDidMount() {
        fetch(`http://localhost:8080/products`, {
            method: 'GET',
        }).then((res) => res.json())   
        .then((json) => {
            this.setState({
                orders: json
            })
            console.log("json:", json)
            console.log("orders:",this.state.orders)
        })
        .catch(result => {
            alert("获取失败");
        })
    }

    render(){
        return (
            <body>
                
              <div className='market'>   
                {/* <p>{this.state.orders}</p>  */}
              </div> 
                {/* <div className="arow">
                    {/* */}
                    {/* <div className="cardOne">
                        <img src={imgUrl} className="productImg"></img>
                        <p className="cardTitle">{this.state.products[0].name}</p>
                        <p className="money">{this.state.products[0].price}</p>
                        <div className=" myBottom">
                            <span >{           }</span>
                            <button className="addBtn" onClick={this.props.buy}>
                             add
                            </button>
                        </div>
                  
                    </div>

                    <div className="cardOne">
                        <img src={imgUrl} className="productImg"></img>
                        <p className="cardTitle">{this.state.products[1].name}</p>
                        <p className="money">{this.state.products[1].price}</p>
                        <div className=" myBottom">
                            <span >{           }</span>
                            <button className="addBtn" onClick={this.props.buy}>
                             add
                            </button>
                        </div>
                    </div>
                    <div className="cardOne">
                        <img src={imgUrl} className="productImg"></img>
                        <p className="cardTitle">{this.state.products[2].name}</p>
                        <p className="money">{this.state.products[2].price}</p>
                        <div className=" myBottom">
                            <span >{           }</span>
                            <button className="addBtn" onClick={this.props.buy}>
                             add
                            </button>
                        </div>
                    </div>
                    <div className="cardOne">
                        <img src={imgUrl} className="productImg"></img>
                        <p className="cardTitle">{this.state.products[3].name}</p>
                        <p className="money">{this.state.products[3].price}</p>
                        <div className=" myBottom">
                            <span >{           }</span>
                            <button className="addBtn" onClick={this.props.buy}>
                             add
                            </button>
                        </div>
                    </div>          
                </div>  */} 
                {/* <div className="arow">
                    
                    <div className="cardOne">
                        <img src={imgUrl} className="productImg"></img>
                        <p className="cardTitle">{this.state.products[0].name}</p>
                        <p className="money">{this.state.products[0].price}</p>
                        <div className=" myBottom">
                            <span >{           }</span>
                            <button className="addBtn" onClick={this.props.buy}>
                             add
                            </button>
                        </div>                      
                    </div>

                       
                </div>                         
            </div>   */}
            {/* <div className="shop">
                {Object.keys(this.state.data)
                    .map((key) => (
                        <div key={key} style={{
                            border: 'solid #ededed',
                            width: '150px',
                            height: '250px',
                            margin: '30px',
                            float: 'left'
                        }}>
                            <img src={this.state.data[key].url} alt="cola"/>
                            <h3>{this.state.data[key].name}</h3>
                            <p>单价：{this.state.data[key].price}/{this.state.data[key].unit}</p>
                            <button
                                className="btn btn-success m-2"
                                style={{width:'30px',height:'30px',borderRadius:'50%',border:'none'}}
                                onClick={() => this.handler(key)}
                            >+
                            </button>
                        </div>
                    ))}

            </div> */}
            <footer>
                TW Mall @2018 Created by ForCheng
            </footer>  
          </body>          
        );
    }
}