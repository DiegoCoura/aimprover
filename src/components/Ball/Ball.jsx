import "./ball.css"

// eslint-disable-next-line react/prop-types
export default function Ball ({onBallClick}) {
    return (
        <button className="ball" onClick={onBallClick}>

        </button>
    )
}