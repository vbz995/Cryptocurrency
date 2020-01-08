import { updateObject } from "../../utility";

export const fetchingBitcoinSuccess = (state, action) => {
  return updateObject(state, { dataBitcoin: action.cryptos, pending: false });
};

export const fetchingBitcoinPending = (state, action) => {
  return updateObject(state, { pending: true });
};

export const fetchingBitcoinFail = (state, action) => {
  return updateObject(state, { pending: false, error: action.error });
};
