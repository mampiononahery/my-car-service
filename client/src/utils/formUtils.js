import { isEmail } from 'validator';

import ErrorForm from '../components/ErrorForm';

/**
 * field validation required
 * @param {*} value 
 * @returns 
 */
export const requiredFields = (value) => {
  if (!value) {
    return <ErrorForm error="This field is required!" />
  }
};

/**
 * email validation
 * @param {*} value 
 * @returns 
 */
export const validEmail = (value) => {
  if (!isEmail(value)) {
    return <ErrorForm error="This is not a valid email." />
  }
};

/**
 * username validation
 * @param {*} value 
 * @returns 
 */
export const validUsername = (value) => {
  if (value.length < 3 || value.length > 100) {
    return <ErrorForm error="The username must be between 3 and 100 characters." />;
  }
}

/**
 * password validation
 * @param {*} value 
 * @returns 
 */
export const validPassword = (value) => {
  if (value.length < 8 || value.length > 40) {
    return <ErrorForm error="The password must be between 8 and 100 characters." />;
  }
}