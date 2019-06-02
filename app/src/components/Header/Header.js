import React, { Component } from 'react';
import logo from '../../logo.svg';
const imgStyle = {
    width: '80px',
    height: '80px',
    color: 'black'
};

const divStyle = {
    lineHeight: '80px',
    verticalAlign: 'middle',
    float: 'right'
};

const mainDiv = {
    border:'1px solid black'
}
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className={'row'} style={mainDiv}>
                <img alt={'logo'} src={ logo } style={imgStyle}/>
                <h2 style={divStyle}>{this.props.name}</h2>
            </div>
            );
        }
    }
    
    export default Header;