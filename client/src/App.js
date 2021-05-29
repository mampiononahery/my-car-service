
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Routes from './Routes';
import Header from './components/Header';

import { getCurrentUser } from './reducers/user';
import { logout } from './actions/auth';

function App() {

  const currentUser = useSelector(getCurrentUser);
  const dispatch = useDispatch();
  const _logout = () => {
    dispatch(logout());
  }
  return (
    <BrowserRouter>
        <Header user={currentUser} onLogout={_logout} />
        <Container>
          <Routes />
        </Container>
    </BrowserRouter>
  );
}

export default App;
