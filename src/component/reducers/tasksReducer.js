import * as types from "../constants/actionTypes";
const initialState = [];
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;

    default:
      return state;
  }
};
export default myReducer;
