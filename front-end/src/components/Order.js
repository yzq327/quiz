import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../styles/Order.css';
export default class Order extends Component{
    state = {
        order: [],
    };

    componentWillMount() {
        fetch(`http://localhost:8080/orders`, {
            method: 'GET',
        }).then((res) => res.json())   
        .then((json) => {
            this.setState({
                order: json
            })
        })
        .catch(result => {
            alert("获取失败");
        })
    }

    deleteOrder(id){
        fetch('http://localhost:8080/order/' + id, {
            method: 'DELETE',
        }).then(response => response.json())
        .then(result => {
                alert("删除成功");
        })
            // .catch(result => {
            //     alert("订单删除失败，请稍后再试");
            //     console.log(result);
            // }) 
    }

    render(){
        console.log("ordershhh:",this.state.order)
        return (
            <body>
                <div className='order'>   
                    <div className='tablehead'>  
                        <scan className='order-id'>订单号：</scan>    
                        <botton className='delete-id' onClick={() => this.deleteOrder()}>删除</botton>                                                                                
                    </div>                           
                    <table className='table'>
                       
                        <tbody  className = 'tobody'>
                            <tr  className = 'order-head'>
                                <td>#</td>                      
                                <td>名称</td>
                                <td>单价</td>
                                <td>数量</td> 
                            </tr>
                            {this.state.order.map((item) =>
                                <tr key={item.name}   className = 'tbodytr'>
                                    <td>{item.id}</td>   
                                    <td>{item.name}</td>                         
                                    <td>{item.price}</td>
                                    <td>{item.amount}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>  
                <footer>
                    TW Mall @2018 Created by ForCheng
                </footer>  
            </body>                                  
        );
    }
}