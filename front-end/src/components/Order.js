import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../styles/Order.css';

const url = 'http://localhost:8080/orders';
let myHeaders = new Headers({
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'text/plain'
});

export default class Order extends Component{
    constructor() {
        super();
        this.state = {
          order: [
            { id: '1', name: '可乐1', price: 1 ,amout: 2, unit: '瓶'},
            { id: '2', name: '可乐2', price: 1 ,amout: 1, unit: '瓶'},
            { id: '3', name: '可乐4', price: 1 ,amout: 5, unit: '瓶'}
          ]
        };
    }
      componentWillMount(){        
        fetch(url, {
            method:"GET",
            headers: myHeaders,
            mode: 'cors',
        })
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                order: json,
            })
        })  
        .catch((error) => {
            console.log(error);
        });
     }
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         order: {},
    //     }
    // }

    componentDidMount() {
        fetch(url).then(
            (response) => response.json()
        ).then((result) => {
            this.setState({
                order: result
            });
        }); 
    }

    deleteOrder(id){
        fetch('http://localhost:8080/order/' + id, {
            method: 'DELETE',
            // headers: {
            //     'Content-Type': 'application/json'
            // }
            headers: myHeaders,
            mode: 'no-cors',
        }).then(response => response.json())
            .then(result => {
                alert("删除成功");
            })
            .catch(result => {
                alert("订单删除失败，请稍后再试");
                console.log(result);
            }) 
    }

    render(){
        return (
            <body>
            <div className='order'>                              
                <table className='table'>
                  <thead>
                     <tr className='tablehead'>                        
                        <th>姓名</th>
                        <th>单价</th>
                        <th>数量</th>
                        <th>单位</th>
                        <th>操作</th>                       
                     </tr>
                  </thead>
                  <tbody  className = 'tobody'>
                    {this.state.order.map((item) =>
                        <tr key={item.name}   className = 'tbodytr'>
                            <td>{item.name}</td>                         
                            <td>{item.price}</td>
                            <td>{item.amout}</td>
                            <td>{item.unit}</td>                       
                        <td><button className='deleteButton' onClick={this.deleteOrder(item.id)}> 删除</button> </td>                            
                </tr>
            )}
                    {/* {Object.keys(this.state.order)
                        .map((key) => (
                            <tr key={key} className = 'tbodytr'>
                                <td>{this.state.order[key].name}</td>
                                <td>{this.state.order[key].price}</td>
                                <td>{this.state.order[key].number}</td>
                                <td>{this.state.order[key].unit}</td>
                                <td>
                                    <button
                                        className='deleteButton'
                                        onClick={() => this.deleteOrder(this.state.order[key].id)}
                                    >删除
                                    </button>
                                </td>
                            </tr>
                        ))} */}
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