import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utility";

const initState = {
  itemsPerPage: 10,
  activePage: 1
};

const activePagination = (state, action) => {
  return updateObject(state, { activePage: action.active });
};
const setItemsPerPage = (state, action) => {
  return updateObject(state, { itemsPerPage: action.items });
};
const PaginationReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_ACTIVE_PAGE:
      return activePagination(state, action);
    case actionTypes.SET_ITEMS_PER_PAGE:
      return setItemsPerPage(state, action);
    default:
      return state;
  }
};

export default PaginationReducer;
