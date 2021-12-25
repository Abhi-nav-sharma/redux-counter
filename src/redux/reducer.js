import {
  ADD,
  DECREMENT_COUNTER,
  DIVIDE,
  INCREMENT_COUNTER,
  MULTIPLY,
  SUBTRACT
} from "./action";

export const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter + action.payload
      };
    }
    case DECREMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter - action.payload
      };
    }
    case ADD: {
      return {
        ...state,
        counter: state.counter + action.payload
      };
    }
    case SUBTRACT: {
      return {
        ...state,
        counter: state.counter - action.payload
      };
    }
    case MULTIPLY: {
      return {
        ...state,
        counter: state.counter * action.payload
      };
    }
    case DIVIDE: {
      return {
        ...state,
        counter: state.counter / action.payload
      };
    }
    default: {
      return state;
    }
  }
};
