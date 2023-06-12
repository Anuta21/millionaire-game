import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { GameStartPage, GameOverPage, QuestionsPage } from './pages';

export const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Navigate to='/start/' />} />
      <Route path='/start' element={<GameStartPage />} />
      <Route path='/end' element={<GameOverPage />} />
      <Route path='/questions' element={<QuestionsPage />} />
    </Routes>
  </Router>
);

export default App;
