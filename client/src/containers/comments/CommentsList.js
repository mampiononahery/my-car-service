import React  from 'react';
import { useDispatch } from 'react-redux';

import { getCurrentUser } from '../../actions/auth';
import { createComment } from '../../actions/comment';

import CommentForm from './CommentForm';
import Comment from './Comment';

const CommentsList = (props) => {
	const { car } = props;

	const dispatch = useDispatch();

	const currentUser = getCurrentUser();

	const _createComment = (text) => {
		dispatch(createComment(car.id, text));
	}

	return (
		<div>
			 {/* only logged user can add a comment */}
			 { currentUser && <CommentForm onAddComment = {_createComment} /> }
			 {
				 car.comments.map((comment, index) => (<Comment item={comment} key={index} />))
			 }			


			
		</div>
	);

}

export default CommentsList;