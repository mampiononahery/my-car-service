
import { BrowserRouter } from "react-router-dom";
import { Container } from 'react-bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Routes from './Routes';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Container>
          <Routes />
        </Container>
    </BrowserRouter>
  );
}

export default App;
