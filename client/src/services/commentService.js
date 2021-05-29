import axios from 'axios';
import { API_URL } from '../constants';
import authHeader from './authHeader';

const create = async (cardId, text) => {
	return await axios.post(API_URL + `/cars/${cardId}/comment`, { text }, { headers: authHeader()} );
}

export default {
	create
}