import { Header } from './sections/Header';
import { Home } from './sections/Home';
import { Event } from './sections/Event';
import { Footer } from './sections/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <Container fluid style={{ padding: '0' }}>
        <Header />
        <Home />
      </Container>
    </>
  );
};

export default App;
