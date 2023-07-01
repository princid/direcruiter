import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import CandidateSearchPage from './Pages/CandidateSearchPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/RegisterPage" element={<RegisterPage />} />
      <Route path="CandidateSearchPage" element={<CandidateSearchPage />} />
    </Routes>
  );
}

export default App;
