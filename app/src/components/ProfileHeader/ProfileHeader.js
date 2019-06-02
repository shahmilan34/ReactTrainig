import React, { Component } from 'react';
import logo from '../../logo.svg';

class ProfileHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <img alt={'logo'} src={logo} />
                <h2>My name is {this.props.name}</h2>
            </div>
         );
    }
}
 
export default ProfileHeader;