import "./mainMenu.css";
import Title from "../../assets/title.png";

// eslint-disable-next-line react/prop-types
export default function MainMenu({ startGame, currentScore }) {
  return (
    <>
      <header className="game-title">
        <img src={Title}></img>
      </header>
      <div className="menu">
        {currentScore !== 0 && <div>Last Score: {currentScore}</div>}
        <button onClick={startGame}>Start</button>
      </div>
    </>
  );
}
