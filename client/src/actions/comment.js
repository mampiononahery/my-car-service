import { fill, findIndex } from 'lodash';
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
				const oldItems = cars.items;

				// update store 
				// update old car with this new comment
				const index = findIndex(oldItems, car => car.id === newCar.id );
				if (index !== -1) {
					// update oldItems
					fill(oldItems, newCar, index, index+1)
				}
				// dispatch store with new  comment
				dispatch({
					type: CARS_UPDATED,
					cars: {...cars, items: oldItems}
				});

		 } catch (error) {
			 console.log(error);
		 }
	}
}