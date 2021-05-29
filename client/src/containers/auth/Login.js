import React, { useState, useRef } from "react";
import { createUseStyles } from 'react-jss';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from "react-router-dom";
import Form from "react-validation/build/form";
import BoostraForm  from "react-bootstrap/Form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login as signin } from '../../actions/auth';
import { requiredFields, validEmail } from '../../utils/formUtils';
import { getCurrentUser } from '../../reducers/user';



const useStyles = createUseStyles((theme) => ({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100vh'
	},
	cardContainer: {
		maxWidth: 350,
  	padding: '40px 40px'
	},
	profileImage: {
		width: 96,
		height: 96,
		margin: '0 auto 10px',
		display: 'block',
		MozBorderRadius: '50%',
		WebkitBorderRadius: '50%',
		borderRadius: '50%'
	},
	
}));

const Login = (props) => {

	// classes 
	const classes = useStyles();

	// ref 
  const form = useRef();
  const checkBtn = useRef();

	// state for form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

	// history
	const history = useHistory();

	// user in store 
	const user = useSelector(getCurrentUser);
	if (user) {
		history.push("/");
	} 

	// dispatch 
	const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
		// validate forme
    form.current.validateAll();
		// run login
    if (checkBtn.current.context._errors.length === 0) {
				setLoading(false);
				dispatch(signin(email, password));

		 	// const result = await login(email, password);
			//  setLoading(false);
			//  if (!result.success) {
			// 	setMessage(result.message);
			// 	return;
			//  }
			//  history.push("/");
    } else {
      setLoading(false);
    }
  };

  return (
		<div className={classes.container}>
				<Card className={classes.cardContainer}>
					<Card.Img variant="top" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" className={classes.profileImage} />
					<Card.Body>
						<Form onSubmit={handleLogin} ref={form}>
								<BoostraForm.Group>
									<BoostraForm.Label>Email</BoostraForm.Label>
									<Input
										type="text"
										className="form-control"
										name="email"
										value={email}
										onChange={onChangeEmail}
										validations={[requiredFields, validEmail]}
									/>
								</BoostraForm.Group>
								<BoostraForm.Group>
									<BoostraForm.Label>Mot de passe</BoostraForm.Label>
									<Input
										type="password"
										className="form-control"
										name="password"
										value={password}
										onChange={onChangePassword}
										validations={[requiredFields]}
									/>
								</BoostraForm.Group>
								<BoostraForm.Group>
								<button className="btn btn-primary btn-block" disabled={loading}>
									{loading && (
										<span className="spinner-border spinner-border-sm"></span>
									)}
									<span>Login</span>
            		</button>
								</BoostraForm.Group>
								{message && (
									<div className="form-group">
										<div className="alert alert-danger" role="alert">
											{message}
										</div>
									</div>
								)}
          			<CheckButton style={{ display: "none" }} ref={checkBtn} />
						</Form>
					</Card.Body>
				</Card>
		</div>
  );
};

export default Login;
