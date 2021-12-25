import { useContext } from "react";
import { incrementCounter, decrementCounter } from "../redux/action";
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
  return (
    <div>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
    </div>
  );
}
