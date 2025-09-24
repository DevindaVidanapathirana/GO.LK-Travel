import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Experiences from './Experiences';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Page components
import ExploreDestinations from './components/ExploreDestinations';
import BookingForm from './components/BookingForm';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';

/* App Content Wrapper */
const AppContent = () => {
  const location = useLocation();

  /* Paths where header should be hidden */
  const noHeaderPaths = ['/explore-destinations', '/watch-our-story', '/booking'];
  const hideHeader = noHeaderPaths.includes(location.pathname);

  return (
    <>
      {/* Conditional Header */}
      {!hideHeader && <Header />}
      
      {/* Main Content */}
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Destinations />
                <Experiences />
                <About />
                <Contact />
              </>
            }
          />
          <Route path="/explore-destinations" element={<ExploreDestinations />} />
          <Route path="/booking" element={<BookingForm onNavigate={(path) => window.location.href = path === 'home' ? '/' : `/${path}`} />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      
      {/* Footer (always visible) */}
      <Footer />
    </>
  );
};

/* Main App Component */
function App() {
  return (
    <Router>
      <div className="App">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;