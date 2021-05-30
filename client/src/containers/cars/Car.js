import React, { useState } from 'react';
import { Card, Badge  } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';

import Comments from '../comments/CommentsList';

const useStyles = createUseStyles((theme) => ({
	badge: {
		display: 'flex',
		justifyContent: 'space-between',
		width: 160,
		marginBottom: 10 
	},
	title: {
		display: 'flex',
		justifyContent: 'space-between'
	}
}));

const Car = (props) => {
	// props
	const { car } = props;

	// classes 
	const classes = useStyles();

	// state
	const [isOpen, setIsOpen] = useState(false);


	const toggleComments = (e) => {
		e.stopPropagation();
		setIsOpen((prevState) => !prevState);

	}
	return (
		<Card style={{width: 500, margin: 15, minHeight: 620}}>
			<Card.Img variant="top" src= {car.image ? car.image : "https://www.largus.fr/images/images/volskwagen-crafter-2017-17.jpg?width=612&quality=80"} />
			<Card.Body>
				<div className={classes.title}>
					<Card.Title>{car.name} </Card.Title>
					<Card.Title>Prix: {car.price} €</Card.Title>
				</div>
				<Card.Text>
					{car.description}
				</Card.Text>
				<div className={classes.badge}>
						<Badge variant="info">{car.mark}</Badge>
						<Badge variant="success">{car.year}</Badge>
						<Badge variant="primary">{car.carburant}</Badge>
				</div>
			
				<Card.Title> <a href="#" onClick={toggleComments}>Commentaires ({car.comments.length})</a> </Card.Title>
				{ isOpen && <Comments car={car} /> }
			</Card.Body>
		</Card>
	);

}

export default Car;