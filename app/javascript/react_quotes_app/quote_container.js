import { connect } from 'react-redux'
import QuoteView from './quote_view'
import { getQuote } from './reducer'
import { deleteQuote } from './actions'

const mapStateToProps = (state, { id }) => {
  return {
    quote: getQuote(state, id),
  };
};

const mapDispatchToProps = {
  deleteQuote
};

const QuoteContainer = connect(mapStateToProps, mapDispatchToProps)(QuoteView)

export default QuoteContainer
