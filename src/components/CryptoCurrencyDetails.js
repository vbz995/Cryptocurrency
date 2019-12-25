import React, {useEffect} from 'react'
import { Container, Table,Button, Spinner} from 'react-bootstrap'
import { connect } from 'react-redux'
import {getSelectedCrypto,  fetchBitcoin} from '../store/actions/crypto'
const CryptoCurrencyDetails = (props)=>{
    const {selectedCurrency, GetSelectedCrypto, selectedId, selectedCrypto, pendingCrypto, dataBitcoin, FetchBitcoin}=props
        // eslint-disable-next-line react-hooks/exhaustive-deps
     useEffect(() => GetSelectedCrypto(selectedId, selectedCurrency), [selectedId, selectedCurrency])
      // eslint-disable-next-line react-hooks/exhaustive-deps
      useEffect(() => FetchBitcoin(selectedId), [selectedId])
    return (
        <Container>
        <Button onClick = {() => GetSelectedCrypto(selectedId, selectedCurrency)}>REFRESH</Button>
        {pendingCrypto?<Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
        </Spinner>:
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price in {selectedCurrency}</th>
            <th>24h volume in {selectedCurrency}</th>
            <th>Market cap in {selectedCurrency}</th>
            <th>Price in Bitcoin</th>
            <th>1h change</th>
            <th>24h change</th>
            <th>7d change</th>
            <th>Total Supply</th>
            <th>Available Supply</th>

            </tr>
        </thead>
        <tbody>
        {(selectedCrypto && dataBitcoin)!==undefined?Object.values(selectedCrypto).map(data=>{
            return(
              <tr key={data.cmc_rank}>
                <td>{data.cmc_rank}</td>
                <td>{data.name}</td>
                <td>{data.symbol}</td>
                <td>{data.quote[selectedCurrency].price}</td>
                <td>{data.quote[selectedCurrency].volume_24h}</td>
                <td>{data.quote[selectedCurrency].market_cap}</td>
                <td>{Object.values(dataBitcoin).map(data=>data.quote['BTC'].price)}</td>
                <td>{data.quote[selectedCurrency].percent_change_1h}</td>
                <td>{data.quote[selectedCurrency].percent_change_24h}</td>
                <td>{data.quote[selectedCurrency].percent_change_7d}</td>
                <td>{data.total_supply}</td>
                <td>{data.max_supply}</td>
           </tr>

            )   
            }):console.log("Fail")}
        </tbody>
       
    </Table>
}
        </Container>
            
    )
}

const mapStateToProps = state=>{
    return{
      dataBitcoin:state.crypto.dataBitcoin,
      selectedId:state.crypto.selectedId,
      selectedCrypto:state.crypto.selectedCrypto,
      data:state.crypto.data,
      pendingCrypto:state.crypto.pending,
      errorCrypto:state.crypto.error,
      selectedCurrency:state.currency.selectedCurrency   
  }
    }
    const mapDispatchToProps = dispatch =>{
        return {
            GetSelectedCrypto:(id, selectedCurrency) => dispatch(getSelectedCrypto(id, selectedCurrency)),
            FetchBitcoin:(id) =>dispatch(fetchBitcoin(id))              
        }
      }
export default connect(mapStateToProps,mapDispatchToProps)(CryptoCurrencyDetails)