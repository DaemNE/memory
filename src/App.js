import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className="App">
      <Header score={score} highScore={highScore}/>
      <Main score={score} highScore={highScore} setScore={setScore} setHighScore={setHighScore}/>
      <Footer />
      
    </div>
  );
}

export default App;
