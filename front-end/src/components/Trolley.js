import React, {Component} from 'react'
import styles from '../styles/Trolley.css'


class Trolley extends Component {
 
  render() {
    return (
      <p styleName="modalComtent">
        <section className="row">
            <p styleName="label">商品:</p>
            <p styleName="text">数量</p>
        </section>
        <section className="row">
            <p styleName="label">可乐</p>
            <p styleName="text">1</p>
            <p styleName="text">删除</p>
        </section>
        <section className="row">
            <p styleName="label">雪碧</p>
            <p styleName="text">2</p>
            <p styleName="text">删除</p>
        </section>
      </p>
    
    
        )
    //     <div styleName="modalComtent">
    //     <section className="row">
    //         <p styleName="label">商品:</p>
    //         <p styleName="text">数量</p>
    //     </section>
    //     <section className="row">
    //         <p styleName="label">可乐</p>
    //         <p styleName="text">1</p>
    //         <p styleName="text">删除</p>
    //     </section>
    //     <section className="row">
    //         <p styleName="label">雪碧</p>
    //         <p styleName="text">2</p>
    //         <p styleName="text">删除</p>
    //     </section>
    // </div>
    // <section key="modalFooter" styleName="modal-footer">
    //     <button 
    //     type="button"
    //     styleName="button" 
    //     className='button primary'
    //     disabled={this.state.submitOrderButtonDisabled} 
    //     onClick={this.createOrder}>立即下单</button>
    //     <button type="button" styleName="button cancel" className="button" onClick={this.hideModal}>清空</button> 
  }
}

export default Trolley
