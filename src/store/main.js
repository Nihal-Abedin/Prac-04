
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";
// const counterReducer = (state = initialState, action) => {
//     if (action.type === "INCREMENT") {
//         return { counter: state.counter + 1, showCounter: state.showCounter };
//     }
//     if (action.type === "INCREMENTBY5") {
//         return { counter: state.counter + action.value, showCounter: state.showCounter };
//     }
//     if (action.type === "DECREMENT") {
//         return { counter: state.counter - 1, showCounter: state.showCounter };
//     }
//     if (action.type === "TOGGLE") {
//         return { counter: state.counter, showCounter: !state.showCounter };
//     }
//     return state;
// };
const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
});

export default store;
