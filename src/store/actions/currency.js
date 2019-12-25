import * as actionTypes from './actionTypes'


export const selectCurrency=(currency)=>({
    type:actionTypes.SELECTED_CURRENCY,
    currency:currency
})