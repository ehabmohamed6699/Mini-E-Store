import { createStore } from "redux";
import favReducer from "./reducer";


const store=createStore(favReducer)

export default store;