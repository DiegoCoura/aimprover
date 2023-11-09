import "./ball.css";

// eslint-disable-next-line react/prop-types
export default function Ball({ onBallClick, id }) {
  function handleClick() {
    onBallClick(id);
  }

  return <button id={id} className="ball" onClick={handleClick}></button>;
}
