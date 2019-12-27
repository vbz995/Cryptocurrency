import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utility";

const initialState = {
  selectedCurrency: "USD"
};

const selectCurrency = (state, action) => {
  return updateObject(state, { selectedCurrency: action.currency });
};
const CurrencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECTED_CURRENCY:
      return selectCurrency(state, action);
    default:
      return state;
  }
};

export default CurrencyReducer;
