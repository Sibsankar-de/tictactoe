import './App.css';
import './css/mainStyle.css'
import './css/secondStyle.css'
import './css/btn.css'
import 'remixicon/fonts/remixicon.css'
import { GameBoard } from './components/GameBoard';
import { Route, Routes } from 'react-router-dom';
import { GameOverPage, GamePlayerPage, GameStartPage } from './components/GameStartPage';
import { HomePage } from './components/HomePage';
import { useEffect, useState } from 'react';


function App() {

  useEffect(() => {
    sessionStorage.removeItem('winTime');
  }, []);

  let matchStart;
  if (sessionStorage.getItem('matchStart') === null) {
    matchStart = false;
  }
  else {
    matchStart = JSON.parse(sessionStorage.getItem('matchStart'));
  }

  const [matchOpen, setMatchOpen] = useState(false);
  useEffect(()=>{
    setMatchOpen(matchStart);
  }, matchStart);

  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/game-player-name' element={<GamePlayerPage />} />
          <Route path='/game-start' element={<GameStartPage />} />
          <Route path='/game-over' element={<GameOverPage />} />
          <Route path={matchOpen?'/game-run': '/hfdhasiduwqo'}element={<GameBoard />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
