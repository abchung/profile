import './App.css';
import Header from './components/Header/Header';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Header />
      </Router>
    </div>
  );
}

export default App;
