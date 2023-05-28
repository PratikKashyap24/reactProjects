// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialCounterState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
const initialAuthState = { isAuthenticated: false };
const AuthSlice = createSlice({
  name: "Auth",
  initialState: initialAuthState,
  reducers: {
    loggIn(state) {
      state.isAuthenticated = true;
    },
    logOut(state) {
      state.isAuthenticated = false;
    },
  },
});

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "incrementBy10") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return state;
// };
const store = configureStore({
  reducer: counterSlice.reducer,
  Auth: AuthSlice.reducer,
});
//const store = createStore(counterReducer);
export const counterActions = counterSlice.actions;
export const authActions = AuthSlice.actions;
export default store;
