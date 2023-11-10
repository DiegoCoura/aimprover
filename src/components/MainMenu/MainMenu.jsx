import styles from "./MainMenu.module.css";
import Title from "../../assets/title.png";

// eslint-disable-next-line react/prop-types
export default function MainMenu({ startGame, currentScore, accuracy }) {
  return (
    <>
      <header className={styles.gameTitle}>
        <img src={Title}></img>
      </header>
      <div className={styles.menu}>
        {currentScore !== 0 && <div>Last Score: {currentScore}</div>}
        {<div>Accuracy: {accuracy}%</div>}
        <button onClick={startGame}>Start</button>
      </div>
    </>
  );
}
