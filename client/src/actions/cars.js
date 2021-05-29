import CarService from '../services/carService';
import { CARS_LOADED } from './types';

/**
 * retrieve all cars
 * @returns 
 */
export const retrieveCars = (currentPage=0) => {
	return async (dispatch) => {
			try	{
					const res = await CarService.getAll(currentPage);
					dispatch({
						type: CARS_LOADED,
						cars: res.data,
					});
			}	catch(error)	{
					console.log(error);
			}
	}
}
