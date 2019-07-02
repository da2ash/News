import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import '../static/css/Sources.css';

export default class Sources extends React.Component {

	constructor(props) {
		super(props);
		this.handleNews = this.handleNews.bind(this);
	}

	handleNews = (e, name) => {
		e.preventDefault();
		console.log(name);
	}

	render() {

		const display = this.props.list.map((source, id) => {
			return(
			    <Col key={id}>
			       	<Card className="cards">
			          	<CardTitle>
				          	<strong>{source.name}</strong>
			          	</CardTitle>
			          	<hr />
			          	<CardText>
				          		{source.description}
			          	</CardText>
				      	<Button className="button" onClick={e => this.handleNews(e, source.id)}>Get Latest News</Button>
			       	</Card>
			       	<br /><br />
			    </Col>				
			);
		})

		return(
			<div>
			    <Row >
			    	{display}
			    </Row>
			</div>
		);
	}

}