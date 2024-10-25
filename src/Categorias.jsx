import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MapPage from './MapPage';
import RegionPage from './RegionPage';
import { Box } from '@mui/material';


function Categorias() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MapPage />} />
        <Route path="/region/:ddd" element={<RegionPage />} />
      </Routes>
    </Router>
    
    
  );
}

export default Categorias;