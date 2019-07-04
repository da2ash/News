import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { BrowserRouter as Link, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Headlines from './Headlines';
import '../static/css/Sources.css';

class Sources extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			show: true,
			news: [],
			searchText: ''
		}
		this.handleNews = this.handleNews.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		if (this.state.show === true) {
			document.getElementById('row').style.display = "block";
		}
	}

	handleNews = (e, name) => {	
		this.props.history.push(`/news/${name}`);
        fetch(`https://newsapi.org/v2/top-headlines?sources=${name}&apiKey=21eb5c804f694ad2a0b123070e1d1920`)
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                news : data.articles,
            });
        });					   
		this.setState({
			show: !this.state.show,
		});			
		console.log(name);
	}

	handleChange = e => {
		this.setState({
			searchText: e.target.value
		});
		console.log(this.state.searchText);
	}

	render() {

		const display = this.props.list.map((source, id) => {
			return(
			    <Col key={id}>
			       	<Card className="cards animated zoomIn">
			          	<CardTitle className="CardTitle">
				          	<strong>{source.name}</strong>
			          	</CardTitle>
			          	<hr />
			          	<CardText className="CardText">
				          		{source.description}
			          	</CardText>
				      	<Button className="button" onClick={e => this.handleNews(e, source.id)}>Get Latest News</Button>
				      	&nbsp;&nbsp;&nbsp;
				      	<a href={source.url} target="_blank"><Button className="button">Go to Website</Button></a>
			       	</Card>
			       	<br /><br />
			    </Col>				
			);
		})

		return(
			<div>
				<Switch>
					<Route exact path="/news/:id" component={() => <Headlines news={this.state.news} />}></Route>
				</Switch>			
				<Row id="row">
				<center>
					<Form onSubmit={e => this.props.submitForm(e, this.state.searchText)}>
						<FormGroup className="formGroup">
					        <Input onChange={this.handleChange} className="Input" type="select" name="select" id="exampleSelect">
					        	<option>general</option>
					            <option>business</option>
					            <option>entertainment</option>					            
					            <option>health</option>
					            <option>science</option>
					            <option>sports</option>
					            <option>technology</option>
					        </Input>							
							<Button className="searchButton" type="submit">Search using Category</Button>
						</FormGroup>
					</Form>
				</center>
					<br /><br /><br />
			    	{display}
			    </Row>					    				
			</div>
		);
	}
}

export default withRouter(Sources);