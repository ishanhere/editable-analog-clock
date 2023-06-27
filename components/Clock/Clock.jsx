import { useEffect, useState } from "react";

const Clock = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const currentDate = new Date();
  const [seconds, setSeconds] = useState();
  const [minutes, setMinutes] = useState();
  const [timer, setTimer] = useState(true);

  const setClock = () => {
    let ts = currentDate.getSeconds() / 60;
    let tm = (seconds + currentDate.getMinutes()) / 60;

    setSeconds(ts);
    setMinutes(tm);
  };
  const temp = () => {
    setTimer(false);
    let tps = document?.getElementById("seconds_input").value;
    let tpm = document?.getElementById("minutes_input").value;
    if (tps > 60 || tpm > 60 || tps < 0 || tpm < 0) {
      return;
    }
    setSeconds(tps);
    setMinutes(tpm);
  };

  useEffect(() => {
    if (timer)
      setInterval(() => {
        setClock();
      }, 1000);
  });

  return (
    <div className="container">
      <div className="clock">
        <div
          className="hand minute"
          style={{ transform: `translate(-50%) rotate(${minutes * 360}deg)` }}
        ></div>
        <div
          className="hand second"
          style={{ transform: `translate(-50%) rotate(${seconds * 360}deg)` }}
        ></div>
        <div>
          {numbers.map((number, index) => {
            return (
              <div className={`number number${number}`} key={index}>
                <div>{number}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-center margin-top-20">
        <input
          type="number"
          value={(minutes * 60).toFixed(0)}
          onChange={() => temp()}
          name="seconds"
          id="seconds_input"
          onfocus={() => {
            setTimer(false);
          }}
        />
        <>:</>
        <input
          type="number"
          onfocus={() => {
            setTimer(false);
          }}
          value={(seconds * 60).toFixed(0)}
          onChange={() => temp()}
          name="minutes"
          id="minutes_input"
        />
      </div>
    </div>
  );
};
export default Clock;
