import React, {Component} from 'react';
//import logo from './logo.svg';

class Weather extends Component {

	constructor(props) {
        super(props);
        this.state = {
			data: {}
		}
	}

	componentDidMount() {
    	fetch('https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/weather?q=Mumbai,uk&appid=b6907d289e10d714a6e88b30761fae22')
			.then(function (res) {
				return res.json()
			})
			.then((data) => {
				this.setState({
                    data
                });
			})
			.catch((error) => console.log(error));
	}

	componentWillUnmount() {
		
  }
  
  
	render() {
		return (
			<div>
				{this.state.data.weather ?
					<h1>{this.state.data.weather.map((data) => <li key={data.id}>{data.description}</li>)}</h1> :
					<h1>Loading...</h1>
			    }			
			</div>
		)
	}
}

export default Weather