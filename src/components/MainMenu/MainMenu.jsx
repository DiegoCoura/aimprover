import "./mainMenu.css"

// eslint-disable-next-line react/prop-types
export default function MainMenu({setPlayGame, currentScore, setCurrentScore}){

    function playGame () {
        setPlayGame(true)
        if(currentScore != 0){
            setCurrentScore(0)
        }
    }

    return (
        <>
            <header className="game-title">AIMPROVE</header>
            <div className="menu">
            {currentScore != 0  && <div>Last Score: {currentScore}</div>}
            <button onClick={playGame}>
                Start
            </button>
            </div>
        </>
    )
}