import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { UAS } from './pages/UAS';
import { SecurityParams } from './pages/SecurityParams';
import { Tactical } from './pages/Tactical';
import { Aerospace } from './pages/Aerospace';
import { Indigenization } from './pages/Indigenization';
import { Contact } from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen text-gray-200">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/uas" element={<UAS />} />
            <Route path="/security" element={<SecurityParams />} />
            <Route path="/tactical" element={<Tactical />} />
            <Route path="/aerospace" element={<Aerospace />} />
            <Route path="/indigenization" element={<Indigenization />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
