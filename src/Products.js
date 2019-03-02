import React, { Component } from 'react';
import ProductsItem from './ProductsItem';
import './App.css';



class Products extends React.Component {
    
    
    render() {
        return this.props.products.map((product) => 
            <ProductsItem
                product={ product }
             />
        )
    }
}

export default Products;