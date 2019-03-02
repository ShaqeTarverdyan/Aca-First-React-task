import React, { Component } from 'react';
import './App.css';

class LeftSide extends React.Component {
    render() {
        return (
            <div className="LeftSide">
                <ul style={ListStyle}>
                    <span>First Category</span>
                    <span>Second Category</span>
                    <span>Third Category</span>
                    <span>Fourth Category</span>
                </ul>
            </div>
            
        );
    }
}
const ListStyle = {
    ListStyleType:'none',
}
export default LeftSide;