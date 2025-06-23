import './App.css'
import './index.css'
import HomePage from './HomePage.jsx';
import ProjectPage from './ProjectPage.jsx';
import { Routes, Route } from 'react-router-dom';
function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectPage />} />
    </Routes>
  )
}

export default App
