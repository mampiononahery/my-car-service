import { Switch, Route } from "react-router-dom";
import Home from './containers/Home';

const Routes = (props) => {
	return (
		<Switch>
			<Route exact path={["/", "/cars"]} component={Home} />
    </Switch>
	);
}
export default Routes;