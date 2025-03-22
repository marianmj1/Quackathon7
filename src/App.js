import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MarketplacePage from './pages/MarketplacePage.js';
import ForumPage from './pages/ForumPage.js';



function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<MarketplacePage />} />
        <Route path="/forum" element={<ForumPage />} />
      </Routes>
    </Router>
  );
}

export default App;







