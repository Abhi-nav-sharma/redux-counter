import { useContext } from "react";
import Counter from "./Components/counter";
import { AppContext } from "./redux/AppContextProvider";
import "./styles.css";

export default function App() {
  const { getState } = useContext(AppContext)[1];
  const { counter } = getState();
  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <Counter />
    </div>
  );
}
