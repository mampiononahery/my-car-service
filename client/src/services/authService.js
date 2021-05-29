import axios from 'axios';
import { API_URL } from '../constants';

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
		const result = await axios.post(API_URL + "/auth/signin", {
					email,
					password,
		});
		if (result.data.accessToken) {
				localStorage.setItem("user", JSON.stringify(result.data));
		}
		return result;
}

/**
 * get current user in storage
 * @returns 
 */
const currentUser = () => {
	return JSON.parse(localStorage.getItem("user"));
}

const logout = () => {
  localStorage.removeItem("user");
};

export default {
	register,
	login,
	currentUser
}