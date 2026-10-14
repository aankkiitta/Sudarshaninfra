// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import ProjectDetail from './pages/ProjectDetail';
import FloatingContact from './components/FloatingContact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Route>
      </Routes>
      <FloatingContact />
    </BrowserRouter>
  );
}

export default App;