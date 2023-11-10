import styles from  "./Board.module.css";
import Ball from "../Ball/Ball";
import { useState } from "react";
import Timer from "../Timer/Timer";

const BOARD_SIZE = 20;

// eslint-disable-next-line react/prop-types
export default function Board({
  currentScore,
  setCurrentScore,
  boardClicks,
  setBoardClicks,
  accuracy,
  setAccuracy,
}) {
  let board = [];
  const ballSizes = ["small", "medium", "big"]

  const [balls, setBalls] = useState([
    {
      name: "ball-0",
      position: generateRandomNumber(),
      size: generateBallSize()
    },
    {
      name: "ball-1",
      position: generateRandomNumber(),
      size: generateBallSize()
    },
    {
      name: "ball-2",
      position: generateRandomNumber(),
      size: generateBallSize()
    },
  ]);

  for (let i = 1; i <= BOARD_SIZE; i++) {
    board.push(<div key={i} id={i} className={styles.cell}></div>);
  }

  function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * BOARD_SIZE + 1);
    return randomNumber;
  }

  function generateRandomBallPosition() {
    let newBallPosition = generateRandomNumber();

    for (const ball of balls) {
      while (ball.position === newBallPosition) {
        newBallPosition = generateRandomNumber();
      }
    }
    return newBallPosition;
  }

  function generateBallSize () {
    let randomSize = Math.floor(Math.random() * ballSizes.length)
    let newBallSize = ballSizes[randomSize]
    return newBallSize 
  }

  balls.forEach((ball) => {
    board[ball.position - 1] = (
      <div key={ball.position} id={ball.position} className={styles.cell}>
        <Ball id={ball.name} onBallClick={onBallClick} ballSize={ball.size} />
      </div>
    );
    
  });

  function onBallClick(id) {
    let newBallPosition = generateRandomBallPosition();
    let newBallSize = generateBallSize();
    let boardUpdate = [];
    for (const ball of balls) {
      if (ball.name === id) {
        ball.position = newBallPosition;
        ball.size = newBallSize;
        //receive a new size
      }
      boardUpdate.push(ball);
    }
    setBalls(() => boardUpdate);
    setCurrentScore(currentScore + 1);
  }

  function handleBoardClick() {
    setBoardClicks((boardClicks) => boardClicks + 1);
    setAccuracy(() => Math.round((currentScore * 100) / boardClicks));
  }

  return (
    <>
      <div className={styles.scoreBoard}>
        <div className={styles.points}>Score: {currentScore}</div>
        <Timer />
        <div className={styles.accuracy}>
          {isNaN(accuracy) ? "100%" : accuracy + "%"}
        </div>
      </div>
      <div className={styles.board} onClick={handleBoardClick}>
        {board}
      </div>
    </>
  );
}
