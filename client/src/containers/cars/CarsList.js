import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';

import { retrieveCars } from '../../actions/cars';
import { getCars } from '../../reducers/cars';

import Pagination from '../../components/Pagination';

import Car from './Car';

const useStyles = createUseStyles((theme) => ({
		carsContainer: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center',
		}
}));

const CarsList = () => {
		// classes 
		const classes = useStyles();
		// select cars in store
		const cars = useSelector(getCars);
	
		// dispatch
		const dispatch = useDispatch();

		// load cars 
		useEffect(() => {
			dispatch(retrieveCars());
		}, []);

		// handle click page 
		const handleClickPage = (page) => {
			dispatch(retrieveCars(page));
		}
		return (
			<>
				<div className={classes.carsContainer}>
					{ cars.items && cars.items.map((car, index) => (
						<Car car={car} key={index} />
					))}
				</div>
				<Pagination 
					totalPages={cars.totalPages && cars.totalPages}
					currentPage={cars.totalPages && cars.currentPage}
					onClicPage={handleClickPage}
				/>
			</>
		);
}

export default CarsList;