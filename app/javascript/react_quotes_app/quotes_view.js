import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { List } from 'immutable'
import Quote from './quote_container'

const propTypes = {
  quotesIds: PropTypes.instanceOf(List).isRequired,
  quotesLoaded: PropTypes.bool,
  quotesLoading: PropTypes.bool,
  fetchQuotes: PropTypes.func.isRequired,
}

const defaultProps = {
  quotesLoaded: false,
  quotesLoading: false,
};

const QuotesView = ({
  quotesIds,
  quotesLoaded,
  quotesLoading, 
  fetchQuotes,
}) => {
  useEffect(() => {
    if (!quotesLoaded){
      fetchQuotes();
    }
  }, [quotesLoaded, fetchQuotes])

  return (
    <div>
      <h2>React Quotes App</h2>
      {quotesLoading ? 
        <p>Loading...</p>
        : 
        <p>Here is your list of quotes:</p>
      }
      <ul>
        {quotesIds && quotesIds.map(id => <Quote key={`quote-${id}`} id={id} />)} 
      </ul>    
    </div>
  )
}

QuotesView.propTypes = propTypes;
QuotesView.defaultProps = defaultProps;

export default QuotesView;