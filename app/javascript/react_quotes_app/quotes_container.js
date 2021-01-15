import { connect } from "react-redux";
import QuotesView from "./quotes_view";
import {
  getQuotesIds,
  getQuotesLoaded,
  getQuotesLoading,
  getCreatingQuote,
} from "./reducer";
import { fetchQuotes, createQuote } from "./actions";

const mapStateToProps = (state) => {
  return {
    quotesIds: getQuotesIds(state),
    quotesLoaded: getQuotesLoaded(state),
    quotesLoading: getQuotesLoading(state),
    creatingQuote: getCreatingQuote(state),
  };
};

const mapDispatchToProps = {
  fetchQuotes,
  createQuote,
};

const QuotesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuotesView);

export default QuotesContainer;
