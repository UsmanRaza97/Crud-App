import { createStore } from "redux"
import TodoReducer from "./Redux/Reducer"
const store = createStore(TodoReducer)
export default store
