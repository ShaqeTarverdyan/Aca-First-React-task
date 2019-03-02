import React, { Component } from 'react';
import './App.css';


class ProductsItem extends Component {
    render() {
        const { img, price, name, description } = this.props.product
        return(
            <div className="products">
                <div style={imgStyle}>
                    { img }
                </div>
                <div style={priceStyle}>
                    <p>
                        { price}
                    </p>
                    
                </div>
                <div style={nameStyle}>
                    <p>
                        <i> { name } </i>
                    </p>
                    
                </div>
                <div>
                    <p>
                        { description }
                    </p>
                </div>
                <button style={styleButton}>Add to card</button>

            </div>
        );
    }
}
const imgStyle = {
    width:'100%',
    paddingTop:'45%',
    backgroundColor:'#AFC476',
    textAlign:'center',
}
const styleButton = {
    width:'100%',
    paddingTop:'4%',
    borderRadius:'5% 5% 5% 5%',
    backgroundColor:'#85B500',
    border:'none',

}
const priceStyle = {
    color:'#535353',
    fontSize:'100%',
}
const nameStyle = {
    fontWeight: 'bold',
}
export default ProductsItem;