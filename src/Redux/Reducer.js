import { ADD_ITEM } from "./Constants"
import { DELETE_ITEM } from "./Constants"
const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return state.concat([action.data])
    case DELETE_ITEM:
      return state.filter(post => post.id !== action.id)
    default:
      return state
  }
}
export default TodoReducer
