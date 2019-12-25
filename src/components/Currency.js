import React from 'react'
import {Dropdown,DropdownButton} from 'react-bootstrap'
import selectCurrency from '../store/actions/currency'
import { connect } from 'react-redux'

const Currency=(props)=>{
    const {SelectCurrency}=props
    return (
        <DropdownButton id="dropdown-basic-button" title="Select currency">
            <Dropdown.Item onClick={()=> SelectCurrency('USD')}>USD</Dropdown.Item>
            <Dropdown.Item onClick={()=> SelectCurrency('EUR')}>EUR</Dropdown.Item>
            <Dropdown.Item onClick={()=> SelectCurrency('CNY')}>CNY</Dropdown.Item>
        </DropdownButton>
    )
}
const mapStateToProps = state=>{
    return{
      selectedCurrency:state.currency.selectedCurrency   
  }
    }


const mapDispatchToProps = dispatch =>{
    return {
      SelectCurrency: (currency) => dispatch(selectCurrency(currency))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Currency)