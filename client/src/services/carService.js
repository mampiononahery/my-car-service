import axios from 'axios';

import { API_URL, ITEMS_PER_PAGES } from '../constants';

/**
 * use for find all cars 
 * @returns 
 */
const getAll = (currentPage=0) => {
	const dataParams = {
		params:{
			currentPage: currentPage,
			itemsPerPage: ITEMS_PER_PAGES 
		}
	}
  return axios.get(API_URL + "/cars",dataParams);
};

const CarService = {
	getAll
}

export default CarService;