import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { List } from "immutable";
import Quote from "./quote_container";

const propTypes = {
  quotesIds: PropTypes.instanceOf(List).isRequired,
  quotesLoaded: PropTypes.bool,
  quotesLoading: PropTypes.bool,
  fetchQuotes: PropTypes.func.isRequired,
  createQuote: PropTypes.func.isRequired,
  creatingQuote: PropTypes.bool,
};

const defaultProps = {
  quotesLoaded: false,
  quotesLoading: false,
  creatingQuote: false,
};

const QuotesView = ({
  quotesIds,
  quotesLoaded,
  quotesLoading,
  fetchQuotes,
  createQuote,
  creatingQuote,
}) => {
  useEffect(() => {
    if (!quotesLoaded) {
      fetchQuotes();
    }
  }, [quotesLoaded, fetchQuotes]);

  const [content, setContent] = useState("");
  const [authorName, setAuthorName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createQuote(content, authorName);
    e.target.reset();
  };

  return (
    <div>
      <h2>React Quotes App</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="content">Quote:</label>
          <br />
          <textarea
            name="content"
            id="RQA_quote_content"
            onChange={(e) => setContent(e.target.value)}
            title="Quote"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="author_name">Author:</label>
          <br />
          <input
            type="text"
            name="author_name"
            id="RQA_quote_author_name"
            onChange={(e) => setAuthorName(e.target.value)}
            title="Author"
            required
          />
        </div>
        <br />
        {!creatingQuote ? (
          <button type="submit">Create Quote</button>
        ) : (
          <button type="submit" disabled>
            Creating Quote...
          </button>
        )}
      </form>
      {quotesLoading ? <p>Loading...</p> : <p>Here is your list of quotes:</p>}
      <ul>
        {quotesIds &&
          quotesIds.map((id) => <Quote key={`quote-${id}`} id={id} />)}
      </ul>
    </div>
  );
};

QuotesView.propTypes = propTypes;
QuotesView.defaultProps = defaultProps;

export default QuotesView;
