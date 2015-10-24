import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import { search } from '../actions/QuoteActions';
import { loadFavorites } from '../actions/FavoriteActions';
import Dashboard from './Dashboard';

function selectFavorites({ favorites, quotes }) {
  return Object.keys(favorites)
    .filter(id => !!favorites[id])
    .map(id => quotes.items[id]);
}

function selectSearchQuotes({ quotes, favorites }) {
  return Object.keys(quotes.items)
    .filter(id => !favorites[id])
    .map(id => quotes.items[id])
    .filter(quote => quote && quote.filtered);
}

@connect(state => ({
  favorites: selectFavorites(state),
  isFavorite: (id) => !!state.favorites[id],
  quotes: selectSearchQuotes(state),
  isQuoteEditorOpen: state.quotes.isQuoteEditorOpen
}))
export default class DashboardRoute extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    quotes: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.dispatch(loadFavorites());
  }

  render() {
    const { dispatch, quotes } = this.props;
    return (
      <Dashboard
        quotes={quotes}
        onSearch={debounce(query => dispatch(search(query)), 500)}
        {...this.props}
      />
    );
  }
}
