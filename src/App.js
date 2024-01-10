import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Form from './form';
import Dashboard from './Dashboard'
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
  );
}

export default App;
