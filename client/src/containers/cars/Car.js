import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
	badge: {
		display: 'flex',
		justifyContent: 'space-between',
		width: 160
	}
}));

const Car = (props) => {
	// classes 
	const classes = useStyles();
	const { car } = props;
	return (
		<Card style={{width: 500, margin: 15 }}>
			<Card.Img variant="top" src=" https://www.largus.fr/images/images/volskwagen-crafter-2017-17.jpg?width=612&quality=80" />
			<Card.Body>
				<Card.Title>{car.name}</Card.Title>
				<Card.Text>
					{car.description}
				</Card.Text>
				<div className={classes.badge}>
						<Badge variant="info">{car.mark}</Badge>
						<Badge variant="success">{car.year}</Badge>
						<Badge variant="primary">{car.carburant}</Badge>
				</div>
			</Card.Body>
		</Card>
	);

}

export default Car;