import React from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'

const propTypes = {
  quote: PropTypes.instanceOf(Map),
}

const defaultProps = {};

const QuoteView = ({
  quote, 
}) => {
  return (
    <li>"{quote.get('content')}" - {quote.get('author_name')}</li>
  )
}

QuoteView.propTypes = propTypes;
QuoteView.defaultProps = defaultProps;

export default QuoteView;