import React, { Component } from 'react';
import '../styles/AddGoods.css'



export default class AddGoods extends Component{
    state = {
        name:'',
        price:'',
        unit:'',
        Img:''
    }

    handleChange = (event) => {   
        this.setState({      
          [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(this.state));
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
                  || !this.state.unit || !this.state.Img}/>                                              
            </form> 
             <footer>
             TW Mall @2018 Created by ForCheng
           </footer>  
           </body>                                 
        );
    }
}