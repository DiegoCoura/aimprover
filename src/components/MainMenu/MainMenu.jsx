import "./mainMenu.css"
import Title from '../../assets/title.png'

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
            <header className="game-title"><img src={Title}></img></header>
            <div className="menu">
            {currentScore != 0  && <div>Last Score: {currentScore}</div>}
            <br />
            <button onClick={playGame}>
                Start
            </button>
            </div>
        </>
    )
}