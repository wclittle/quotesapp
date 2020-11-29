import * as api from './api';

const ACTIONS = {
  FETCH_QUOTES_REQUEST: 'RQA::FetchQuotesRequest',
  FETCH_QUOTES_SUCCESS: 'RQA::FetchQuotesSuccess',
  FETCH_QUOTES_FAILURE: 'RQA::FetchQuotesFailure',
  CREATE_QUOTE_REQUEST: 'RQA::CreateQuoteRequest',
  CREATE_QUOTE_SUCCESS: 'RQA::CreateQuoteSuccess',
  CREATE_QUOTE_FAILURE: 'RQA::CreateQuoteFailure',
  DELETE_QUOTE_REQUEST: 'RQA::DeleteQuoteRequest',
  DELETE_QUOTE_SUCCESS: 'RQA::DeleteQuoteSuccess',
  DELETE_QUOTE_FAILURE: 'RQA::DeleteQuoteFailure',    
} 

const genericAPI = (action, request, success, failure, errorMessage, meta = {}) => (dispatch) => {
  dispatch({ type: request, ...meta });
  return action().then(
    response => dispatch({ type: success, response, ...meta }),
    error => dispatch({ type: failure, message: error.message || errorMessage, ...meta }),
  );
};

export const fetchQuotes = () =>
  genericAPI(
    api.fetchQuotes,
    ACTIONS.FETCH_QUOTES_REQUEST,
    ACTIONS.FETCH_QUOTES_SUCCESS,
    ACTIONS.FETCH_QUOTES_FAILURE,
    'Failed to load quotes',
  );

export const createQuote = (content, author) =>
  genericAPI(
    () => api.createQuote(content,author),
    ACTIONS.CREATE_QUOTE_REQUEST,
    ACTIONS.CREATE_QUOTE_SUCCESS,
    ACTIONS.CREATE_QUOTE_FAILURE,
    'Failed to create quote',
  );

export const deleteQuote = (id) =>
  genericAPI(
    () => api.deleteQuote(id),
    ACTIONS.DELETE_QUOTE_REQUEST,
    ACTIONS.DELETE_QUOTE_SUCCESS,
    ACTIONS.DELETE_QUOTE_FAILURE,
    'Failed to delete quote',
  );  

export default ACTIONS;