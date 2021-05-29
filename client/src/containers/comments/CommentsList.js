import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import { getCurrentUser } from '../../reducers/user';
import { createComment } from '../../actions/comment';

import CommentForm from './CommentForm';
import Comment from './Comment';

const CommentsList = (props) => {
	const { car } = props;

	const dispatch = useDispatch();

	const currentUser = useSelector(getCurrentUser);

	const _createComment = (text) => {
		dispatch(createComment(car.id, text));
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
				 car.comments.map((comment, index) => (<Comment item={comment} key={index} />))
			 }			


			
		</div>
	);

}

export default CommentsList;