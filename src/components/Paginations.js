import React from "react";
import { Pagination } from "react-bootstrap";
import { connect } from "react-redux";
import { setActivePagination } from "../store/actions/pagination";
import { fetchCryptos } from "../store/actions/crypto";

const Paginations = props => {
  const datasPerPages = 10;
  const pageNumbers = [];
  console.log("this.prop", props.data);
  if (props.data !== undefined) {
    for (let i = 0; i < Math.ceil(100 / datasPerPages); i++) {
      console.log("PAAAG: ", props.activePagination);
      pageNumbers.push(
        <Pagination.Item
          onClick={() => {
            props.SetActivePagination(i + 1);
            props.FetchCryptos(
              i * datasPerPages + 1,
              datasPerPages,
              props.selectedCurrency
            );
          }}
          active={i + 1 === props.activePagination}
        >
          {parseInt(i + 1)}
        </Pagination.Item>
      );
    }
  }

  return <Pagination>{pageNumbers}</Pagination>;
};

const mapStateToProps = state => {
  return {
    activePagination: state.pagination.activePagination,
    data: state.crypto.data,
    selectedCurrency: state.currency.selectedCurrency
  };
};
const mapDispatchToProps = dispatch => {
  return {
    SetActivePagination: active => dispatch(setActivePagination(active)),
    FetchCryptos: (start, limit, cur) =>
      dispatch(fetchCryptos(start, limit, cur))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Paginations);
