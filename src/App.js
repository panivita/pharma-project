import { Header } from './sections/Header/Header';
import { NavBar } from './sections/NavBar/NavBar';
import { HeroSection } from './sections/HeroSection/HeroSection';
import { ImprovementSection } from './sections/Improvement/ImprovementSection';
import { FactSection } from './sections/FactSection/FactSection';
import { ToolsSection } from './sections/ToolsSection/ToolsSection';
import { VideoSection } from './sections/VideoSection/VideoSection';
import { ReferencesSection } from './sections/Reference/ReferencesSection';
import { Footer } from './sections/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <Container fluid style={{ padding: '0' }}>
        <Header />
        <NavBar />
        <HeroSection />
        <ImprovementSection />
        <FactSection />
        <ToolsSection />
        <VideoSection />
        <ReferencesSection />
        <Footer />
      </Container>
    </>
  );
};

export default App;
