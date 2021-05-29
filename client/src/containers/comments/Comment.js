import React from 'react';
import { createUseStyles } from 'react-jss';

import { getDateDuration } from '../../utils/utils';

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

	const { item } = props;

	const classes = useStyles();

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
		</div>
	);
}

export default Comment;