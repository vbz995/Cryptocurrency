import React, { useState } from "react";
import { Dropdown, DropdownButton, Container } from "react-bootstrap";
import { selectCurrency } from "../store/actions/index";
import { connect } from "react-redux";
import styled from "styled-components";
const H3 = styled.h3`
  color: green;
`;
const Currency = props => {
  const [ShowText, setShowText] = useState(false);
  const { SelectCurrency, selectedCurrency } = props;
  return (
    <Container>
      {ShowText ? <H3>You choose {selectedCurrency} currency</H3> : null}
      <DropdownButton id="dropdown-basic-button" title="Select currency">
        <Dropdown.Item
          onClick={() => {
            SelectCurrency("USD");
            setShowText(true);
          }}
        >
          USD
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            SelectCurrency("EUR");
            setShowText(true);
          }}
        >
          EUR
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            SelectCurrency("CNY");
            setShowText(true);
          }}
        >
          CNY
        </Dropdown.Item>
      </DropdownButton>
    </Container>
  );
};
const mapStateToProps = state => {
  return {
    selectedCurrency: state.currency.selectedCurrency
  };
};
const mapDispatchToProps = dispatch => {
  return {
    SelectCurrency: currency => dispatch(selectCurrency(currency))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Currency);
