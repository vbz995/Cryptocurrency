import { updateObject } from "../../utility";

export const getCryptoSuccess = (state, action) => {
  return updateObject(state, {
    selectedCrypto: action.cryptos,
    pending: false
  });
};

export const getCryptoPending = (state, action) => {
  return updateObject(state, { pending: true });
};

export const getCryptoFail = (state, action) => {
  return updateObject(state, { pending: false, error: action.error });
};

export const getCryptoID = (state, action) => {
  return updateObject(state, { pending: false, selectedId: action.id });
};
