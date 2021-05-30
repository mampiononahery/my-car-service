import React from 'react';
import { createUseStyles } from 'react-jss';

import { getDateDuration } from '../../utils/utils';
import { isAdmin } from '../../actions/auth';

const useStyles = createUseStyles((theme) => ({
	containerComment: {
		display: 'flex',
		padding: 10,
		alignItems: 'center'
	},
	avatar: {
		width: 40,
		marginRight: 20
	},
	body: {
		flex: 1
	},
	user: {
		fontSize: '1.25rem',
		textDecoration: 'underline',
		cursor: 'pointer',
		color: '#0056b3'
	}
}));

const Comment = (props) => {

	const { item, currentUser, onDelete } = props;

	const classes = useStyles();
	const _onDelete = (e, item) => {
		e.preventDefault();
		e.stopPropagation();
		onDelete(item);
	} 

	return (
		<div className={classes.containerComment}>
			<div className={classes.avatar}>
				<img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" style={{width: '100%'}}/>
			</div>
			<div className={classes.body}>
				<div className="">
					<span className={classes.user}>{item.user.username}</span> - {getDateDuration(item.createdAt)} 
				</div>
				<p>{item.text}</p>
			</div>
			<div>
				{/* admin or user of comment only a access to delete */}
				{((currentUser && item.user._id === currentUser.id ) || isAdmin())  && <a onClick={(e) => _onDelete(e, item)} href="#">delete</a> }
			</div>
		</div>
	);
}

export default Comment;