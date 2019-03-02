import React, { Component } from 'react';
import Products from './Products';
import './App.css';

class CenterSide extends React.Component {
    state = {
        products: [
          {img:"./Images/images.jpg", price:'EUR 25.15', name:'product 1', description:'This is product N1 descriptipn'},
          {img:"some url", price:'EUR 25.15', name:'product 2', description:'This is product N2 descriptipn'},
          {img:"some url", price:'EUR 25.15', name:'product 3', description:'This is product N3 descriptipn'},
          {img:"some url", price:'EUR 25.15', name:'product 1', description:'This is product N1 descriptipn'},
          {img:"some url", price:'EUR 25.15', name:'product 2', description:'This is product N2 descriptipn'},
          {img:"some url", price:'EUR 25.15', name:'product 3', description:'This is product N3 descriptipn'},
        ]
      }
    render() {
        return(
            <div className="CenterSide_main">
                <div style={CenterHeader}>  
                    <h1>Products</h1>
                </div>
                <div >
                   <Products 
                        products={this.state.products}
                    />
                </div>
            </div>
        );
    }
}
const CenterHeader = {
    marginTop:'-3%',
}
export default CenterSide;