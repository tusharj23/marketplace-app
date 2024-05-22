import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Marketplace from './pages/Marketplace';
import ProductPreview from './pages/ProductPreview';
import ChatInterface from './pages/ChatInterface';
import UserProfile from './pages/UserProfile';
import Map from './components/Map';


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Marketplace />} />
        <Route path="/product/:id" element={<ProductPreview />} />
        <Route path="/map/:id" element={<Map />} />
        <Route path="/chat/:id" element={<ChatInterface />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
      
    </Router>
  );
}

export default App;
