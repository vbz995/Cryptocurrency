import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import  {fetchCryptos} from '../store/actions/crypto'
import {Table, Spinner} from 'react-bootstrap'
import { Container, Button } from 'react-bootstrap';
import {selectedCryptoId} from '../store/actions/crypto'

const CryptocurrencyList = (props) => {
  const {FetchCryptos, data, pendingCrypto, selectedCurrency, SelectedCryptoId}=props
    // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => FetchCryptos(selectedCurrency), [selectedCurrency])
   return(
        <Container>
        <Button onClick = {() => FetchCryptos(selectedCurrency)}>REFRESH</Button>
        {pendingCrypto?<Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
        </Spinner>:
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>Rank</th>
            <th>Symbol</th>
            <th>Price in {selectedCurrency}</th>
            <th>24 hour change</th>
            </tr>
        </thead>
        <tbody>
        {data!==undefined?data.map(datas=>{
            return(
              // eslint-disable-next-line no-restricted-globals
              <tr onClick={()=>{SelectedCryptoId(datas.id); props.history.push('/details')}}>
                <td>{datas.cmc_rank}</td>
                <td>{datas.symbol}</td>
                <td>{datas.quote[selectedCurrency].price}</td>
                <td>{datas.quote[selectedCurrency].percent_change_24h}</td>
           </tr>
            )   
            }): console.log("Fail")}
        </tbody> 
    </Table>
        }
        </Container>
   )
 }

const mapStateToProps = state=>{
    return{
      selectedId:state.crypto.selectedId,
      data:state.crypto.data,
      pendingCrypto:state.crypto.pending,
      errorCrypto:state.crypto.error,
      selectedCurrency:state.currency.selectedCurrency   
  }
    }
    
  const mapDispatchToProps = dispatch =>{
      return {
        FetchCryptos: (cur) => dispatch(fetchCryptos(cur)),
        SelectedCryptoId: (id) =>dispatch(selectedCryptoId(id))
      }
    }
    
export default connect(mapStateToProps,mapDispatchToProps)(CryptocurrencyList)