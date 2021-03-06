import moment from 'moment';
import 'moment/locale/fr';

export const getDateDuration = (date) => moment(date).fromNow();

/**
 * get user in localStorage
 * @returns 
 */
export const getUserInStorage = () => {
	return JSON.parse(localStorage.getItem('user'));
}