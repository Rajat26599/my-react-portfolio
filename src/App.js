import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './components/home/Home';
import { useEffect } from 'react';

function App() {
  
  useEffect(() => {
    document.title = 'Rajat Saxena'
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
