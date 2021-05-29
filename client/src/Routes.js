import { Switch, Route } from "react-router-dom";
import Home from './containers/Home';
import Login from './containers/auth/Login';
import Register from './containers/auth/Register';

const Routes = (props) => {
	return (
		<Switch>
			<Route exact path={["/", "/cars"]} component={Home} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/signup" component={Register} />
    </Switch>
	);
}
export default Routes;