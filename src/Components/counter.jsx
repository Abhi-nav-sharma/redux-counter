import { useContext, useState } from "react";
import {
  incrementCounter,
  decrementCounter,
  addCounter,
  subtractCounter,
  multiplyCounter,
  divideCounter
} from "../redux/action";
import { AppContext } from "../redux/AppContextProvider";

export default function Counter() {
  const { dispatch } = useContext(AppContext)[1];
  const handleInc = () => {
    const action = incrementCounter(1);
    dispatch(action);
  };
  const handleDec = () => {
    const action = decrementCounter(1);
    dispatch(action);
  };
  const [state, setState] = useState(0);
  const handleOperation = (e) => {
    if (e.target.name === "add") {
      let action = addCounter(state);
      dispatch(action);
    } else if (e.target.name === "subtract") {
      let action = subtractCounter(state);
      dispatch(action);
    } else if (e.target.name === "multiply") {
      let action = multiplyCounter(state);
      dispatch(action);
    } else if (e.target.name === "divide") {
      let action = divideCounter(state);
      dispatch(action);
    }
  };
  return (
    <div>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
      <br />
      <br />
      <input
        placeholder="Enter any number"
        value={state}
        type="number"
        onChange={(e) => {
          setState(Number(e.target.value));
        }}
      />
      <br />
      <button name="add" onClick={handleOperation}>
        Add by {state}
      </button>
      <button name="subtract" onClick={handleOperation}>
        Subtract by {state}
      </button>
      <button name="multiply" onClick={handleOperation}>
        Multiply by {state}
      </button>
      {state === 0 ? (
        <button disabled>Divide by {state}</button>
      ) : (
        <button name="divide" onClick={handleOperation}>
          Divide by {state}
        </button>
      )}
    </div>
  );
}
