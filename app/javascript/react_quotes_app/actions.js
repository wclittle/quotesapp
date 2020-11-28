import * as api from './api';

const ACTIONS = {
  FETCH_QUOTES_REQUEST: 'RQA::FetchQuotesRequest',
  FETCH_QUOTES_SUCCESS: 'RQA::FetchQuotesSuccess',
  FETCH_QUOTES_FAILURE: 'RQA::FetchQuotesFailure',
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

export default ACTIONS;