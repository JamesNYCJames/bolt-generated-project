import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Article from './pages/Article';
import Resources from './pages/Resources';
import CaseStudies from './pages/CaseStudies';
import Tools from './pages/Tools';
import Research from './pages/Research';
import ProfessionalDevelopment from './pages/ProfessionalDevelopment';
import Unsubscribe from './pages/Unsubscribe';

function App() {
  return (
    <Router>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/article/:slug" element={<Article />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/research" element={<Research />} />
          <Route path="/professional-development" element={<ProfessionalDevelopment />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
