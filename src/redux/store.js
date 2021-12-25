import { createStore } from "redux";
import { reducer } from "./reducer";

const initState = {
  counter: 0
};
export const store = createStore(reducer, initState);

console.log(store.getState());

store.subscribe(() => {
  console.log("something has changed", store.getState());
});

// const action = incrementCounter(1);
// store.dispatch(action);
// store.dispatch(action);
// store.dispatch(action);
// store.dispatch(action);
