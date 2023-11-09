import { useTimer } from "../../Hooks/useTimer";

export default function Timer() {
  const { minutes, seconds } = useTimer(30);

  return (
    <div className="timer">
      <span>{minutes.toString().padStart(2, "0")}</span>
      <span>:</span>
      <span>{seconds.toString().padStart(2, "0")}</span>
    </div>
  );
}
