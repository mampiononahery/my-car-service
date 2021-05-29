import React from 'react';
import { Alert }  from 'react-bootstrap';

const ErrorForm = (props) => {

	const { error } = props;

	return (
		<Alert variant="danger">{error}</Alert>
	);
}

export default ErrorForm;