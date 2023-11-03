import "./ball.css";

// eslint-disable-next-line react/prop-types
export default function Ball({ onBallClick, id, index }) {
  function handleClick() {
    onBallClick(id);
  }

  return (
    <button
      key={`ball` + index}
      id={id}
      className="ball"
      onClick={handleClick}
    ></button>
  );
}
