import React, { Component } from 'react';

class Bio extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <p>{this.props.bio}</p>
            </div>
         );
    }
}
 
export default Bio;