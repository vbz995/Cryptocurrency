import * as actionTypes from "./actionTypes";

export const setActivePage = active => ({
  type: actionTypes.SET_ACTIVE_PAGE,
  active: active
});

export const setItemsPerPage = items => ({
  type: actionTypes.SET_ITEMS_PER_PAGE,
  items: items
});
