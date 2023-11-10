import { useTimer } from "../../Hooks/useTimer";
import styles from "./Timer.module.css"

export default function Timer() {
  const { minutes, seconds } = useTimer(30);

  return (
    <div className={styles.timer}>
      <span>{minutes.toString().padStart(2, "0")}</span>
      <span>:</span>
      <span>{seconds.toString().padStart(2, "0")}</span>
    </div>
  );
}
