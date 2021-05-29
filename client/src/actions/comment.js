import CommentService from '../services/commentService';
import { CARS_UPDATED } from './types';

import { getCars } from '../reducers/cars';
/**
 * retrieve all cars
 * @returns 
 */
export const createComment = (carId, text) => {
	return async (dispatch, getState) => {
		 try {
			 	const cars = getCars(getState());
				const result = await CommentService.create(carId, text);
				const newCar = result.data;

				dispatch({
					type: CARS_UPDATED,
					cars: {...cars, items: [newCar, ...cars.items]}
				});

		 } catch (error) {
			 console.log(error);
		 }
	}
}