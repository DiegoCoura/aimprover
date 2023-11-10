import { useEffect, useState } from "react";
import Board from "./components/Board/Board";
import MainMenu from "./components/MainMenu/MainMenu";

const GAME_DURATION = 30000;

function App() {
  const [playGame, setPlayGame] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [boardClicks, setBoardClicks] = useState(0);
  const [accuracy, setAccuracy] = useState(0);

  useEffect(() => {
    if (playGame) {
      const timeout = setTimeout(() => {
        setPlayGame(false);
      }, GAME_DURATION);
      return () => clearTimeout(timeout);
    }
  }, [playGame]);

  const startGame = () => {
    setPlayGame(true);
    if (currentScore != 0) {
      setCurrentScore(0);
      setAccuracy(0);
      setBoardClicks(0);
    }
  };

  return (
    <>
      {playGame ? (
        <Board
          setCurrentScore={setCurrentScore}
          currentScore={currentScore}
          setBoardClicks={setBoardClicks}
          boardClicks={boardClicks}
          accuracy={accuracy}
          setAccuracy={setAccuracy}
        />
      ) : (
        <MainMenu
          startGame={startGame}
          currentScore={currentScore}
          accuracy={accuracy}
        />
      )}
    </>
  );
}

export default App;
