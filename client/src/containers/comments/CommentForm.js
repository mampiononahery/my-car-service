import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const CommentForm = (props) => {

	const { onAddComment } = props;

	const [comment, setComment] = useState('');


	const handleSubmit = (event, values) => {
		event.preventDefault();
		event.stopPropagation();
		const form  = event.currentTarget;
		
		// post comment when text is not empty
		if (form.checkValidity()) {
			onAddComment(comment);
		}
	}

	return (
		<Form noValidate onSubmit={handleSubmit}>
      <FormControl  as="textarea" 
				rows={3}
				onChange={(e) => setComment(e.target.value)}
				className="input-form-control" required />
      <Button variant="outline-primary" type="submit">Commenter </Button>
			
    </Form>
	)
}

export default CommentForm;
