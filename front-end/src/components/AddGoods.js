import React, { Component } from 'react';
import '../styles/AddGoods.css'
const url = 'http://localhost:8080/product';
let myHeaders = new Headers({
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'text/plain'
});

export default class AddGoods extends Component{
    state = {
        name:'',
        price:'',
        unit:'',
        Img:'',
        prdulct: {
            name:'',
            price:'',
            unit:'',
             Img:''
        }
    }
    // componentWillMount(){        
    //     fetch(url, {
    //         method:"POST",
    //         headers: myHeaders,
    //         mode: 'cors',
    //     })
    //     .then((res) => res.json())
    //     .then((json) => {
    //         this.setState({
    //             users: json,
    //         })
    //     });
    //  }
    handleChange = (event) => {   
        this.setState({      
          [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) => {

        fetch(`http://localhost:8080/product/`, {
            method: 'POST',
        }).then(response => response.json())
            .then(result => {
                alert("添加成功");
                console.log(result)
            })
        .catch(result => {
                alert("添加失败");
                console.log(result)
        })

    }

    render(){
        return (
            <body>
            <form className='myForm' onSubmit={this.handleSubmit}>  
                <label className="baseicLabe">
                    <label className='isNeccessary'>*</label> 名称</label>   
                <input type='text' name='name' className="imputName"
                    onChange={this.handleChange}
                    value={this.state.name} placeholder="名称"/>   
                <label className="baseicLabe">
                    <label className='isNeccessary'>*</label>价格</label>   
                <input type='text' name='price' className="imputName"
                    onChange={this.handleChange}
                    value={this.state.price} placeholder="价格"/>  
                <label className="baseicLabe">
                    <label className='isNeccessary'>*</label> 单位</label>   
                <input type='text' name='unit' className="imputName"
                    onChange={this.handleChange}
                    value={this.state.unit} placeholder="单位"/>  
                <label className="baseicLabe">
                    <label className='isNeccessary'>*</label> 图片</label>   
                <input type='text' name='Img' className="imputName"
                    onChange={this.handleChange}
                    value={this.state.Img} placeholder="URL"/>  
                <input className='submit' type='submit' value='提 交' 
                  disabled={!this.state.name || !this.state.price 
                  || !this.state.unit || !this.state.Img} onclick={this.handleSubmit}/>                                       
            </form> 
             <footer>
             TW Mall @2018 Created by ForCheng
           </footer>  
           </body>                                 
        );
    }
}