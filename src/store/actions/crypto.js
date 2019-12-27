import * as actionTypes from './actionTypes'

export const fetchCryptosSuccess=(cryptos)=>(
{
    type:actionTypes.FETCH_CRYPTOS_SUCCESS,
    cryptos:cryptos

})

export const fetchCryptosFail=(error)=>({
    type:actionTypes.FETCH_CRYPTOS_FAIL,
    error:error

})

export const fetchCryptosPending =()=>({
    type:actionTypes.FETCH_CRYPTOS_PENDING

})
export const fetchCryptos=(start,limit,cur)=>{
    parseInt(start)
    parseInt(limit)
    console.log("limit", limit)
    return dispatch=>{
        dispatch(fetchCryptosPending())
         fetch(`https://cors-anywhere.herokuapp.com/https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=${start}&limit=${limit}&convert=${cur}`, {
            method:'GET',
            headers:{
                'Accept': 'application/json',
                'X-CMC_PRO_API_KEY': '659b8981-4fc1-4966-8d4e-fe3a3e94caf5',
                'Content-Type': 'application/json',
            },
	})
        .then(res=>res.json())
        .then(res=>{
            console.log("RES: ", res)
            if(res.error){
                throw(res.error)
            }
            dispatch(fetchCryptosSuccess(res.data))
        })
        .catch(error=>{
            console.log("ReS ERROR: ", error)
            dispatch(fetchCryptosFail(error))
        })
    }
}
export const getCryptoSuccess=(cryptos)=>(
    {
        type:actionTypes.GET_SELECTED_CRYPTOS_SUCCESS,
        cryptos:cryptos
    
    })
    
    export const getCryptoFail=(error)=>({
        type:actionTypes.GET_SELECTED_CRYPTOS_FAIL,
        error:error
    
    })
    
    export const getCryptoPending =()=>({
        type:actionTypes.GET_SELECTED_CRYPTOS_PENDING
    
    })

export const getSelectedCrypto=(id, currency)=>{
    return dispatch=>{
        dispatch(getCryptoPending())
         fetch(`https://cors-anywhere.herokuapp.com/https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=${id}&convert=${currency}`, {
            method:'GET',
            headers:{
                'Accept': 'application/json',
                'X-CMC_PRO_API_KEY': '659b8981-4fc1-4966-8d4e-fe3a3e94caf5',
                'Content-Type': 'application/json',
            },
	})
        .then(res=>res.json())
        .then(res=>{
            if(res.error){
                throw(res.error)
            }
            dispatch(getCryptoSuccess(res.data))
        })
        .catch(error=>{
            dispatch(getCryptoFail(error))
        })
    }
}

export const selectedCryptoId=(id)=>(
    {
        type:actionTypes.SELECTED_CRYPTOS_ID,
        id:id
    
    })

export const fetchBitcoinSuccess=(cryptos)=>(
    {
        type:actionTypes.FETCH_BITCOIN_SUCCESS,
        cryptos:cryptos
        
    })
        
export const fetchBitcoinFail=(error)=>(
    {
        type:actionTypes.FETCH_BITCOIN_FAIL,
        error:error
        
    })
        
export const fetchBitcoinPending =()=>(
    {
        type:actionTypes.FETCH_BITCOIN_PENDING
        
    })

export const fetchBitcoin=(id)=>{
        return dispatch=>{
            dispatch(fetchBitcoinPending())
            fetch(`https://cors-anywhere.herokuapp.com/https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=${id}&convert=BTC`, {
                method:'GET',
                headers:{
                    'Accept': 'application/json',
                    'X-CMC_PRO_API_KEY': '659b8981-4fc1-4966-8d4e-fe3a3e94caf5',
                    'Content-Type': 'application/json',
                },
            })
                .then(res=>res.json())
                .then(res=>{
                    if(res.error){
                        throw(res.error)
                    }
                    dispatch(fetchBitcoinSuccess(res.data))
                })
                .catch(error=>{
                    dispatch(fetchBitcoinFail(error))
                })
            }
        }
        