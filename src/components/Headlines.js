import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';
import '../static/css/Headlines.css';

export default class Header extends React.Component {

	componentDidMount() {
		document.getElementById('row').style.display = "none";
	}

	componentWillUnmount() {
		document.getElementById('row').style.display = "block";
	}

	shouldComponentUpdate() {
		document.getElementById('row').style.display = "block";
	}

	render() {

		const news = this.props.news;	

		return(
			<div>
				<center>
				<div className="heading">
					TOP HEADLINES
				</div>
				<br /><br />
					{
						news.map((content, i) => (
						    <Card className="Card Committee" key={i}>
						        <CardImg className="CardImg" top src={content.urlToImage} alt="No Image Available"/>
						        <br /><br />
						        <CardBody className="CardBody">
								    <CardTitle className="CardTitle">{content.title}</CardTitle>						
								    <hr />
							   	    <CardText className="CardText">			
								   	    <span>{content.content}</span>
								   	    <hr />				   	    
								   	    <a href={content.url} className="articleLink" target="_blank">Link to article</a>
							   	    </CardText>
						   		</CardBody>
					  		</Card>					
						))
					}
				</center>
			</div>
		);
	}
}