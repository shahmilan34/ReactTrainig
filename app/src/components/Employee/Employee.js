import React, { Component } from 'react';
import logo from '../../logo.svg';

const imgStyle = {
    width: '80px',
    height: '80px'
};

const divStyle = {
    lineHeight: '80px',
    verticalAlign: 'middle',
    float: 'right'
};


class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="row">
                <img src = { logo } alt = {'logo'} style={ imgStyle }/>
                <div style={divStyle}>
                    <h1>{this.props.name}</h1>
                    <h3> {this.props.profession} </h3>
                </div>
            </div>
         );
    }
}

export default Employee;