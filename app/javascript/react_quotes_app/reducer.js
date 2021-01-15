import { combineReducers } from "redux-immutable";
import QuotesReducer, * as QuotesSelect from "./quotes_reducer";

const RootReducer = combineReducers({
  quotes: QuotesReducer,
});

export default RootReducer;

export const getQuote = (state, id) =>
  QuotesSelect.getQuote(state.get("quotes"), id);
export const getQuotesIds = (state) =>
  QuotesSelect.getQuotesIds(state.get("quotes"));
export const getQuotesLoaded = (state) =>
  QuotesSelect.getQuotesLoaded(state.get("quotes"));
export const getQuotesLoading = (state) =>
  QuotesSelect.getQuotesLoading(state.get("quotes"));
export const getCreatingQuote = (state) =>
  QuotesSelect.getCreatingQuote(state.get("quotes"));
