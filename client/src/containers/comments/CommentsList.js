import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import { getCurrentUser } from '../../reducers/user';
import { createComment, deleteComment } from '../../actions/comment';

import CommentForm from './CommentForm';
import Comment from './Comment';

const CommentsList = (props) => {
	const { car } = props;

	const dispatch = useDispatch();

	const currentUser = useSelector(getCurrentUser);

	// handle create comment
	const _createComment = (text) => {
		dispatch(createComment(car.id, text));
	}

	// handle delete comment
	const _deleteComment = (comment) => {
		dispatch(deleteComment(car, comment._id));
	}

	const renderInfoBtnCom = () => {
		return (
			<div className="flexRow">
				<span>Laissez vos commentaires en cliquant sur </span>
				<Link to={"/login"} className="nav-link">connexion.</Link>
			</div>
		);
	}

	return (
		<div>
			 {/* only logged user can add a comment */}
			 { currentUser && <CommentForm onAddComment = {_createComment} /> }

			 { !currentUser && 	renderInfoBtnCom() }

			 {
				 car.comments.map((comment, index) => (
				 	<Comment 
					 	item={comment} 
						key={index}
						onDelete={_deleteComment}
						currentUser={currentUser} 
					/>))
			 }			


			
		</div>
	);

}

export default CommentsList;