import './App.css';
import Header from './components/Header/Header';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const myElements = [
    {
      element: About,
      path: '/about',
    },
    {
      element: Projects,
      path: '/projects',
    },
  ];

  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          {myElements.map((myElement) => (
            <Route path={myElement.path} element={<myElement.element />} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
