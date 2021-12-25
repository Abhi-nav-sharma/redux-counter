export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const MULTIPLY = "MULTIPLY";
export const DIVIDE = "DIVIDE";
export const incrementCounter = (amount) => ({
  type: INCREMENT_COUNTER,
  payload: amount
});
export const decrementCounter = (amount) => ({
  type: DECREMENT_COUNTER,
  payload: amount
});
export const addCounter = (amount) => ({
  type: ADD,
  payload: amount
});
export const subtractCounter = (amount) => ({
  type: SUBTRACT,
  payload: amount
});
export const multiplyCounter = (amount) => ({
  type: MULTIPLY,
  payload: amount
});
export const divideCounter = (amount) => ({
  type: DIVIDE,
  payload: amount
});
