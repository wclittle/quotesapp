import { connect } from 'react-redux'
import QuotesView from './quotes_view'
import { getQuotesIds, getQuotesLoaded, getQuotesLoading } from './reducer'
import { fetchQuotes } from './actions'

const mapStateToProps = (state) => {
  return {
    quotesIds: getQuotesIds(state),
    quotesLoaded: getQuotesLoaded(state), 
    quotesLoading: getQuotesLoading(state),
  };
};

const mapDispatchToProps = {
  fetchQuotes
};

const QuotesContainer = connect(mapStateToProps, mapDispatchToProps)(QuotesView)

export default QuotesContainer
