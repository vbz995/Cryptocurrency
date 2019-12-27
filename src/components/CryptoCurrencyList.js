import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCryptos } from "../store/actions/crypto";
import { Table, Spinner } from "react-bootstrap";
import { Container, Button } from "react-bootstrap";
import { selectedCryptoId } from "../store/actions/crypto";
import Paginations from "./Paginations";
const CryptocurrencyList = props => {
  const {
    FetchCryptos,
    data,
    pendingCrypto,
    selectedCurrency,
    SelectedCryptoId,
    activePagination
  } = props;

  useEffect(
    () =>
      FetchCryptos(
        parseInt((activePagination - 1) * 10 + 1),
        "10",
        selectedCurrency
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedCurrency]
  );
  console.log("data", data);
  return (
    <Container>
      <Button
        onClick={() =>
          FetchCryptos(
            parseInt((activePagination - 1) * 10 + 1),
            "10",
            selectedCurrency
          )
        }
      >
        REFRESH
      </Button>
      {pendingCrypto ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <Container>
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
              {data !== undefined
                ? data.map(datas => {
                    return (
                      // eslint-disable-next-line no-restricted-globals
                      <tr
                        onClick={() => {
                          SelectedCryptoId(datas.id);
                          props.history.push("/details");
                        }}
                      >
                        <td>{datas.cmc_rank}</td>
                        <td>{datas.symbol}</td>
                        <td>{datas.quote[selectedCurrency].price}</td>
                        <td>
                          {datas.quote[selectedCurrency].percent_change_24h}
                        </td>
                      </tr>
                    );
                  })
                : console.log("FAIL")}
            </tbody>
          </Table>
          {data !== undefined ? <Paginations /> : console.log("sasasaasa")}
        </Container>
      )}
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    selectedId: state.crypto.selectedId,
    data: state.crypto.data,
    pendingCrypto: state.crypto.pending,
    errorCrypto: state.crypto.error,
    selectedCurrency: state.currency.selectedCurrency,
    activePagination: state.pagination.activePagination
  };
};

const mapDispatchToProps = dispatch => {
  return {
    FetchCryptos: (start, limit, cur) =>
      dispatch(fetchCryptos(start, limit, cur)),
    SelectedCryptoId: id => dispatch(selectedCryptoId(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CryptocurrencyList);
