import axios from 'axios';
import { normalize } from 'normalizr';
import * as schema from './schema';

axios.interceptors.request.use((config) => {
  const newConf = config;
  const csrfMetaTag = document.head.querySelector('meta[name="csrf-token"]');
  if (csrfMetaTag) {
    newConf.headers['X-CSRF-Token'] = csrfMetaTag.content;
  }
  newConf.headers['Content-Type'] = 'application/json';
  newConf.headers.Accept = 'application/json';
  newConf.responseType = 'json';
  return config;
});

const normalizeQuotes = response => normalize(response.data, [schema.quote]);
const normalizeQuote = response => normalize(response.data, schema.quote);

export const fetchQuotes = () =>
  axios.get('/api/v1/quotes').then(normalizeQuotes);

export const createQuote = (content, author) =>
  axios.post('/api/v1/quotes', {content, author}).then(normalizeQuote);
