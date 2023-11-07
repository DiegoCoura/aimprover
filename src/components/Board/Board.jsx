import "./board.css";
import Ball from "../Ball/Ball";
import { useState } from "react";
import Timer from "../Timer/Timer";

const BOARD_SIZE = 20;

// eslint-disable-next-line react/prop-types
export default function Board({ currentScore, setCurrentScore, boardClicks, setBoardClicks, accuracy, setAccuracy }) {
  let board = [];    
  
  const [balls, setBalls] = useState([
    {
      name: "ball-0",
      position: generateRandomNumber(),
    },
    {
      name: "ball-1",
      position: generateRandomNumber(),
    },
    {
      name: "ball-2",
      position: generateRandomNumber(),
    },
  ]);

  for (let i = 1; i <= BOARD_SIZE; i++) {
    board.push(<div key={i} id={i} className={"cell"}></div>);
  }

  function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * BOARD_SIZE + 1);
    return randomNumber;
  }

  function generateRandomBallPosition() {
    let randomNumber = generateRandomNumber();

    for (const ball of balls) {
      while (ball.position === randomNumber) {
        randomNumber = generateRandomNumber();
      }
    }
    return randomNumber;
  }

  balls.forEach((ball, index) => {
    board[ball.position - 1] = (
      <div key={ball.position} id={ball.position} className={"cell"}>
        <Ball index={index} id={ball.name} onBallClick={onBallClick} />
      </div>
    );
  });

  function onBallClick(id) {
    let newBallPosition = generateRandomBallPosition();
    let boardUpdate = [];
    for (const ball of balls) {
      if (ball.name === id) {
        ball.position = newBallPosition;
      }
      boardUpdate.push(ball);
    }
    setBalls(() => boardUpdate);    
    setCurrentScore(currentScore + 1);
  }  

  function handleBoardClick(){ 
    setBoardClicks((boardClicks) => boardClicks + 1)
    setAccuracy(()=> Math.round((currentScore * 100) / boardClicks))
  }

  return (
    <>
      <div className="scoreBoard">
        <div className="points">Score: {currentScore}</div>
        <Timer />
        <div  className="accuracy">{isNaN(accuracy) ? "100%" : accuracy + "%"}</div>
      </div>
      <div className="board" onClick={handleBoardClick}>{board}</div>
    </>
  );
}
