import * as actionTypes from "../actions/actionTypes";
import {
  fetchingCryptoSuccess,
  fetchingCryptoPending,
  fetchingCryptoFail
} from "./fetchingCryptos";
import {
  getCryptoSuccess,
  getCryptoPending,
  getCryptoFail,
  getCryptoID
} from "./selectedCrypto";
import {
  fetchingBitcoinSuccess,
  fetchingBitcoinPending,
  fetchingBitcoinFail
} from "./fetchBitcoin";

const initState = {
  dataBitcoin: null,
  selectedId: null,
  selectedCrypto: {},
  data: [],
  pending: false,
  error: null
};

const CryptoReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CRYPTOS_SUCCESS:
      return fetchingCryptoSuccess(state, action);
    case actionTypes.FETCH_CRYPTOS_FAIL:
      return fetchingCryptoFail(state, action);
    case actionTypes.FETCH_CRYPTOS_PENDING:
      return fetchingCryptoPending(state, action);
    case actionTypes.GET_SELECTED_CRYPTOS_SUCCESS:
      return getCryptoSuccess(state, action);
    case actionTypes.GET_SELECTED_CRYPTOS_PENDING:
      return getCryptoFail(state, action);
    case actionTypes.GET_SELECTED_CRYPTOS_FAIL:
      return getCryptoPending(state, action);
    case actionTypes.SELECTED_CRYPTOS_ID:
      return getCryptoID(state, action);
    case actionTypes.FETCH_BITCOIN_SUCCESS:
      return fetchingBitcoinSuccess(state, action);
    case actionTypes.FETCH_BITCOIN_FAIL:
      return fetchingBitcoinFail(state, action);
    case actionTypes.FETCH_BITCOIN_PENDING:
      return fetchingBitcoinPending(state, action);
    default:
      return { state };
  }
};

export default CryptoReducer;
