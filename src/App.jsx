import { useEffect, useState } from "react";
import Board from "./components/Board/Board";
import MainMenu from "./components/MainMenu/MainMenu";

const GAME_DURATION = 30000;

function App() {
  const [playGame, setPlayGame] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);

  useEffect(() => {
    if(playGame){
      const timeout = setTimeout(()=>{
        setPlayGame(false)
      }, GAME_DURATION)
      return () => clearTimeout(timeout)
    }
  }, [playGame]) 

  return (
    <>       
      {playGame ? (
        <Board setCurrentScore={setCurrentScore} currentScore={currentScore} />
      ) : (
        <MainMenu setPlayGame={setPlayGame} setCurrentScore={setCurrentScore} currentScore={currentScore} />
      )}
    </>
  );
}

export default App;
