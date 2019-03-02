import React, { Component } from 'react';
import './App.css';

class Header extends React.Component {
   render() {
       return (
        <div className="Header">
            <div className="input-search">
                <input placeholder="Search"/>
                <button>Search</button>
            </div>
            <div className="menu-list">
                <ul>
                    <li>Home</li>
                    <li>Cataloge</li>
                    <li>Company</li>
                    <li>Contact</li>
                </ul>
            </div>
            

        </div>
       );
   }

}
export default Header;