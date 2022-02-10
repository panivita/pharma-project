import { Header } from './sections/Header';
import { Home } from './sections/Home';
import { Section } from './sections/Section';
import { AboutSection } from './sections/AboutSection';
import { ToolsSection } from './sections/ToolsSection';
import { VideoSection } from './sections/VideoSection';
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
        <Section />
        <AboutSection />
        <ToolsSection />
        <VideoSection />
      </Container>
    </>
  );
};

export default App;
