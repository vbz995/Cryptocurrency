import { updateObject } from "../../utility";

export const fetchingCryptoSuccess = (state, action) => {
  return updateObject(state, { data: action.cryptos, pending: false });
};

export const fetchingCryptoPending = (state, action) => {
  return updateObject(state, { pending: true });
};

export const fetchingCryptoFail = (state, action) => {
  return updateObject(state, { pending: false, error: action.error });
};
