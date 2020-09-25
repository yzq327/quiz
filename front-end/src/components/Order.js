import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import '../styles/App.css';
const url = 'http://localhost:3306/products';
let myHeaders = new Headers({
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'text/plain'
});

export default class Order extends Component{
    constructor() {
        super();
        this.state = {
          order: [
            { name: '可乐1', price: 1 ,amout: 2, unit: '瓶'},
            { name: '可乐2', price: 1 ,amout: 1, unit: '瓶'},
            { name: '可乐4', price: 1 ,amout: 5, unit: '瓶'}
          ]
        };
    }
    componentWillMount(){        
        fetch(url, {
            method:"DELETE",
            headers: myHeaders,
            mode: 'cors',
        })
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                users: json,
            })
        });
     }
    render(){
        return (
            <body>
            <div className='order'>                              
                <table className='table'>
                <thead>
                     <tr>                        
                        <th>姓名</th>
                        <th>单价</th>
                        <th>数量</th>
                        <th>单位</th>
                        <th>操作</th>                       
                     </tr>
                    </thead>
                <tbody>
                    {this.state.order.map((item) =>
                        <tr key={item.name}>
                        <td>{item.name}</td>                         
                        <td>{item.price}</td>
                        <td>{item.amout}</td>
                        <td>{item.unit}</td>                       
                        <td><button onClick > 删除</button> </td>
                            
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