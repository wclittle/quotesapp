import React from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'

const propTypes = {
  quote: PropTypes.instanceOf(Map),
  deleteQuote: PropTypes.func.isRequired,  
}

const defaultProps = {};

const QuoteView = ({
  quote,
  deleteQuote,
}) => {

  const handleClick = () => {
    deleteQuote(quote.get('id'))
  }

  return (
    <li onClick={handleClick}>
      "{quote.get('content')}" 
      - {quote.get('author_name')}
    </li>
  )
}

QuoteView.propTypes = propTypes;
QuoteView.defaultProps = defaultProps;

export default QuoteView;