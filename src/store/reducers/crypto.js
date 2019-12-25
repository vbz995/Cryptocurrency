import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../utility'

const initState = {
    dataBitcoin:null,
    selectedId:null,
    selectedCrypto:{},
    data:[],
    pending: false,
    error: null

}
const fetchingCryptoSuccess=(state, action)=>{
    return updateObject(state, {data:action.cryptos, pending:false})
}

const fetchingCryptoPending=(state, action)=>{
    return updateObject(state, {pending:true})
}

const fetchingCryptoFail=(state, action)=>{
    return updateObject(state, {pending:false, error:action.error})
}



const getCryptoSuccess=(state, action)=>{
    return updateObject(state, {selectedCrypto:action.cryptos, pending:false})
}

const getCryptoPending=(state, action)=>{
    return updateObject(state, {pending:true})
}

const getCryptoFail=(state, action)=>{
    return updateObject(state, {pending:false, error:action.error})
}

const getCryptoID=(state, action)=>{
    return updateObject(state, {pending:false, selectedId:action.id})
}

const fetchingBitcoinSuccess=(state, action)=>{
    return updateObject(state, {dataBitcoin:action.cryptos, pending:false})
}

const fetchingBitcoinPending=(state, action)=>{
    return updateObject(state, {pending:true})
}

const fetchingBitcoinFail=(state, action)=>{
    return updateObject(state, {pending:false, error:action.error})
}


const CryptoReducer = (state=initState, action)=>{
    switch(action.type){
        case actionTypes.FETCH_CRYPTOS_SUCCESS:
            return fetchingCryptoSuccess(state, action)
        case actionTypes.FETCH_CRYPTOS_FAIL:
            return fetchingCryptoFail(state, action)
        case actionTypes.FETCH_CRYPTOS_PENDING:
            return fetchingCryptoPending(state, action)
        case actionTypes.GET_SELECTED_CRYPTOS_SUCCESS:
            return getCryptoSuccess(state, action)
        case actionTypes.GET_SELECTED_CRYPTOS_PENDING:
            return getCryptoFail(state, action)
        case actionTypes.GET_SELECTED_CRYPTOS_FAIL:
            return getCryptoPending(state, action)
        case actionTypes.SELECTED_CRYPTOS_ID:
            return getCryptoID(state, action)
        case actionTypes.FETCH_BITCOIN_SUCCESS:
            return fetchingBitcoinSuccess(state, action)
        case actionTypes.FETCH_BITCOIN_FAIL:
            return fetchingBitcoinFail(state, action)
        case actionTypes.FETCH_BITCOIN_PENDING:
            return fetchingBitcoinPending(state, action)
        default: return {state}

    }
}

export default CryptoReducer