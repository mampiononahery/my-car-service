import axios from 'axios';
import { API_URL } from '../constants';
import { getUserInStorage } from '../utils/utils';

/**
 * create new user 
 * @param {*} values 
 */
const register = async (values) => {
	return await axios.post(API_URL + "/auth/signup", values);
}

/**
 * login
 * @param {*} email 
 * @param {*} password 
 * @returns 
 */
const login = async (email, password) => {
		const result = await axios.post(API_URL + "/auth/signin", { email,password});
		if (result.data.accessToken) {
				localStorage.setItem("user", JSON.stringify(result.data));
		}
		return result.data;
}

/**
 * get current user in local storage
 * @returns 
 */
const currentUserInStorage = () => {
	return getUserInStorage();
}

export default {
	register,
	login,
	currentUserInStorage
}