import styles from "./Ball.module.css";

// eslint-disable-next-line react/prop-types
export default function Ball({ onBallClick, id, ballSize }) {
  function handleClick() {
    onBallClick(id);
  }

  return (
    <button
      id={id}
      className={`${styles.ball} ${styles[ballSize]}`}
      onClick={handleClick}
    ></button>
  );
}
