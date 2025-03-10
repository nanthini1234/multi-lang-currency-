import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import NotFound from './pages/NotFound'; // Fallback component for 404 errors

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Product Page Route */}
        <Route path="/product" element={<ProductPage />} />

        {/* Fallback Route for 404 Errors */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;