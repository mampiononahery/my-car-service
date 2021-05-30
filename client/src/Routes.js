import { Switch, Route } from "react-router-dom";
import Home from './containers/Home';
import Login from './containers/auth/Login';
import Register from './containers/auth/Register';
import AddCar from './containers/cars/AddCar';

const Routes = (props) => {
	return (
		<Switch>
			<Route exact path={["/", "/cars"]} component={Home} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/signup" component={Register} />
			<Route exact path="/car" component={AddCar} />
    </Switch>
	);
}
export default Routes;