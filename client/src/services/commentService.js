import axios from 'axios';
import { API_URL } from '../constants';
import authHeader from './authHeader';

/**
 * create a comments
 * @param {*} cardId 
 * @param {*} text 
 * @returns 
 */
const create = async (cardId, text) => {
	return await axios.post(API_URL + `/cars/${cardId}/comment`, { text }, { headers: authHeader()} );
}

/**
 * delete a comments
 * @param {*} carId 
 * @param {*} commentId 
 * @returns 
 */
const remove = (carId, commentId) => {
	return axios.delete(API_URL + `/cars/${carId}/comment/${commentId}`, { headers: authHeader()} );
}

export default {
	create,
	remove
}