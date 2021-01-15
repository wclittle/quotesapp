import { Map, List } from "immutable";
import actions from "./actions";
import { combineReducers } from "redux-immutable";

const DEFAULT_MAP = new Map();
const DEFAULT_LIST = new List();

function byId(state = DEFAULT_MAP, action) {
  if (
    action.response &&
    action.response.entities &&
    action.response.entities.quotes
  ) {
    return state.merge(
      new Map(action.response.entities.quotes).map((props) => new Map(props))
    );
  }
  if (action.response && action.response.data) {
    return state.delete(action.response.data.toString());
  }
  return state;
}

function allIds(state = DEFAULT_LIST, action) {
  switch (action.type) {
    case actions.FETCH_QUOTES_SUCCESS:
      return new List(action.response.result);
    case actions.CREATE_QUOTE_SUCCESS:
      if (state.indexOf(action.response.result) > -1) {
        return state;
      } else {
        return state.insert(0, action.response.result);
      }
    case actions.DELETE_QUOTE_SUCCESS:
      if (state.indexOf(action.response.data) > -1) {
        return state.remove(state.indexOf(action.response.data));
      } else {
        return state;
      }
    default:
      return state;
  }
}

function loading(state = false, action) {
  switch (action.type) {
    case actions.FETCH_QUOTES_REQUEST:
      return true;
    case actions.FETCH_QUOTES_SUCCESS:
    case actions.FETCH_QUOTES_FAILURE:
      return false;
    default:
      return state;
  }
}

function creating(state = false, action) {
  switch (action.type) {
    case actions.CREATE_QUOTE_REQUEST:
      return true;
    case actions.CREATE_QUOTE_SUCCESS:
    case actions.CREATE_QUOTE_FAILURE:
      return false;
    default:
      return state;
  }
}

function loaded(state = false, action) {
  switch (action.type) {
    case actions.FETCH_QUOTES_SUCCESS:
      return true;
    default:
      return state;
  }
}

const DEFAULT_STATE = new Map();

export const QuotesReducer = combineReducers(
  {
    byId,
    allIds,
    loading,
    loaded,
    creating,
  },
  () => DEFAULT_STATE
);

export const getQuote = (state, id) => state.getIn(["byId", id.toString()]);

export const getQuotesIds = (state) => state.get("allIds");

export const getQuotesLoading = (state) => state.get("loading");

export const getQuotesLoaded = (state) => state.get("loaded");

export const getCreatingQuote = (state) => state.get("creating");

export default QuotesReducer;
