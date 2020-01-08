/* eslint-disable no-unused-expressions */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchCryptos,
  selectedCryptoId,
  setItemsPerPage,
  setActivePage
} from "../store/actions/index";
import {
  Table,
  Spinner,
  FormLabel,
  Dropdown,
  DropdownButton,
  Form,
  Container,
  Button
} from "react-bootstrap";
import Paginations from "./Paginations";

const listData = (data, activePage, itemsPerPage, newDataArray) => {
  for (
    let i = (activePage - 1) * itemsPerPage;
    i < activePage * itemsPerPage;
    i++
  ) {
    data[i] !== undefined ? newDataArray.push(data[i]) : null;
  }
};
const CryptocurrencyList = props => {
  const newDataArray = [];
  const {
    FetchCryptos,
    data,
    pendingCrypto,
    selectedCurrency,
    SelectedCryptoId,
    activePage,
    itemsPerPage,
    SetActivePagination,
    SetItemsPerPage
  } = props;

  useEffect(
    () => FetchCryptos(selectedCurrency),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activePage, itemsPerPage]
  );
  data !== undefined
    ? listData(data, activePage, itemsPerPage, newDataArray)
    : null;
  return (
    <Container>
      <Button
        className="float-left"
        onClick={() => FetchCryptos(selectedCurrency)}
      >
        REFRESH
      </Button>
      <Form inline className="float-right">
        <FormLabel>Select number items per page: </FormLabel>
        <DropdownButton
          className="ml-2"
          id="dropdown-basic-button"
          title={itemsPerPage}
        >
          <Dropdown.Item
            onClick={() => {
              SetItemsPerPage(5);
              SetActivePagination(1);
            }}
          >
            5
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              SetItemsPerPage(10);
              SetActivePagination(1);
            }}
          >
            10
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              SetItemsPerPage(20);
              SetActivePagination(1);
            }}
          >
            20
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              SetItemsPerPage(50);
              SetActivePagination(1);
            }}
          >
            50
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              SetItemsPerPage(100);
              SetActivePagination(1);
            }}
          >
            100
          </Dropdown.Item>
        </DropdownButton>
      </Form>
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
              {newDataArray.map(data => {
                return (
                  // eslint-disable-next-line no-restricted-globals
                  <tr
                    key={data.id}
                    onClick={() => {
                      SelectedCryptoId(data.id);
                      props.history.push("/details");
                    }}
                  >
                    <td>{data.cmc_rank}</td>
                    <td>{data.symbol}</td>
                    <td>{data.quote[selectedCurrency].price}</td>
                    <td>{data.quote[selectedCurrency].percent_change_24h}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Paginations />
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
    activePage: state.pagination.activePage,
    itemsPerPage: state.pagination.itemsPerPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    FetchCryptos: cur => dispatch(fetchCryptos(cur)),
    SelectedCryptoId: id => dispatch(selectedCryptoId(id)),
    SetItemsPerPage: items => dispatch(setItemsPerPage(items)),
    SetActivePagination: active => dispatch(setActivePage(active))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CryptocurrencyList);
