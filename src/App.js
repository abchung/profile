import './App.css';
import { WindowProvider } from './context/WindowContext';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <WindowProvider>
        <Header />
      </WindowProvider>
    </div>
  );
}

export default App;
