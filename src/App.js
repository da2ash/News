import React from 'react';
import Sources from './components/Sources';
import './App.css';

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			sources : []
		}
	}

	submitForm = (e, name) => {
		e.preventDefault();
		console.log(name);
        fetch(`https://newsapi.org/v2/sources?language=en&category=${name}&apiKey=21eb5c804f694ad2a0b123070e1d1920`)
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                sources : data.sources
            })
        })
      	.catch(error => {
        	console.log('Error fetching and parsing data', error);
      	});        	 		
	}

	componentDidMount() {
        const url = "https://newsapi.org/v2/sources?language=en&apiKey=21eb5c804f694ad2a0b123070e1d1920";
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                sources : data.sources
            })
        })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });           		
	}

	render() {
	  	return (
		    <div className="App">
		      	<Sources list={this.state.sources} submitForm={this.submitForm.bind(this)} />
		    </div>
	  	);		
	}
}
