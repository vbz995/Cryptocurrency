import React from "react";
import { Pagination } from "react-bootstrap";
import { connect } from "react-redux";
import {
  fetchCryptos,
  setActivePage,
  setItemsPerPage
} from "../store/actions/index";

const Paginations = props => {
  const pageNumbers = [];
  const {
    data,
    selectedCurrency,
    itemsPerPage,
    activePage,
    SetActivePagination,
    FetchCryptos
  } = props;
  if (data !== undefined) {
    for (
      let counter = 0;
      counter < Math.ceil(data.length / itemsPerPage);
      counter++
    ) {
      pageNumbers.push(
        <Pagination.Item
          key={counter}
          onClick={() => {
            activePage === counter + 1
              ? FetchCryptos(selectedCurrency)
              : SetActivePagination(counter + 1);
          }}
          active={counter + 1 === activePage}
        >
          {parseInt(counter + 1)}
        </Pagination.Item>
      );
    }
  }

  return (
    <Pagination className="w-100">
      <Pagination.First
        onClick={() => {
          activePage === 1
            ? FetchCryptos(selectedCurrency)
            : SetActivePagination(1);
        }}
      />
      <Pagination.Prev
        onClick={() => {
          activePage === 1
            ? FetchCryptos(selectedCurrency)
            : SetActivePagination(parseInt(activePage - 1));
        }}
      />
      {pageNumbers}
      <Pagination.Next
        onClick={() => {
          activePage === Math.ceil(data.length / itemsPerPage)
            ? FetchCryptos(selectedCurrency)
            : SetActivePagination(parseInt(activePage + 1));
        }}
      />
      <Pagination.Last
        onClick={() => {
          activePage === Math.ceil(data.length / itemsPerPage)
            ? FetchCryptos(selectedCurrency)
            : SetActivePagination(Math.ceil(data.length / itemsPerPage));
        }}
      />
    </Pagination>
  );
};

const mapStateToProps = state => {
  return {
    activePage: state.pagination.activePage,
    data: state.crypto.data,
    selectedCurrency: state.currency.selectedCurrency,
    itemsPerPage: state.pagination.itemsPerPage
  };
};
const mapDispatchToProps = dispatch => {
  return {
    SetActivePagination: active => dispatch(setActivePage(active)),
    FetchCryptos: cur => dispatch(fetchCryptos(cur)),
    SetItemsPerPage: items => dispatch(setItemsPerPage(items))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Paginations);
