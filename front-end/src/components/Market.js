import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import imgUrl from '../assets/timg.jpg';
const URL = 'jdbc:mysql://localhost:3306/products';



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
         };
     }

    // componentDidMount() {
    //     async function fetchDate(url) {
    //       const response = await fetch(url).then((response) => response.json());
    //       return response;
    //     }
    //     fetchDate(URL)
    //       .then((response) => {
    //         this.setState({
    //           products: response,
    //         });
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    // }

    render(){
        return (
            <body>
            <div className='market'>    
                <div className="arow">
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
                </div>                              
            </div>  
         <footer>
            ThoughtWorks University China
          </footer>  
          </body>          
        );
    }
}