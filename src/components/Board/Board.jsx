import "./board.css";
import Ball from "../Ball/Ball";
import { useState } from "react";

const BOARD_CENTER = 12;
const BOARD_SIZE = 20;

// eslint-disable-next-line react/prop-types
export default function Board({currentScore, setCurrentScore}) {

  const [ballPosition, setBallPosition] = useState(BOARD_CENTER)
  let board = []  
  

  function generateRandomBallPosition(){
    let prevPosition = ballPosition;
    
    let randomNumber = Math.floor((Math.random() * BOARD_SIZE) + 1); 
      while(randomNumber === prevPosition){
        randomNumber = Math.floor((Math.random() * BOARD_SIZE) + 1);
      }
    return randomNumber;
  }

  function onBallClick() {    
    let newBallPosition = generateRandomBallPosition();    
    setBallPosition(newBallPosition)
    setCurrentScore(currentScore + 1);
  }

  for (let i = 1; i <= BOARD_SIZE; i++){
    board.push(
      <div key={i} id={i} className={'cell ' + i}>{i === ballPosition ? <Ball onBallClick={onBallClick} /> : ""}</div>
    )
  }
  
  return (
    <>
      <div className="board">
        {board}
      </div>
      <div>
        Score: {currentScore}
      </div>
    </>
  );
}
