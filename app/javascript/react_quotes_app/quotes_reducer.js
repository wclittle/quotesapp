import { Map, List } from 'immutable';
import actions from './actions';
import { combineReducers } from 'redux-immutable'

const DEFAULT_MAP = new Map();
const DEFAULT_LIST = new List();

function byId(state = DEFAULT_MAP, action) {
  if (action.response && action.response.entities && action.response.entities.quotes) {
    return state.merge((new Map(action.response.entities.quotes)).map(props => new Map(props)));
  }
  return state;
}

function allIds(state = DEFAULT_LIST, action) {
  switch (action.type) {
  case actions.FETCH_QUOTES_SUCCESS:
    return new List(action.response.result);
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

function loaded(state = false, action) {
  switch (action.type) {
  case actions.FETCH_QUOTES_SUCCESS:
    return true;
  default:
    return state;
  }
}

const DEFAULT_STATE = new Map();

export const QuotesReducer = combineReducers({
  byId,
  allIds,
  loading,
  loaded,  
}, () => DEFAULT_STATE);

export const getQuote = (state, id) =>
  state.getIn(['byId', id.toString()]);

export const getQuotesIds = (state) =>
  state.get('allIds');

export const getQuotesLoading = (state) =>
  state.get('loading') ;

export const getQuotesLoaded = (state) =>
  state.get('loaded') ;

export default QuotesReducer;