import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import QuoteEditor from './QuoteEditor';
import { search, toggleQuoteEditor, createQuote } from '../actions/QuoteActions';
import { loadFavorites } from '../actions/FavoriteActions';
import Grid from './Grid';
import List from './List';

const Dashboard = ({
  onSearch,
  favorites,
  quotes,
  dispatch,
  isFavorite,
  isQuoteEditorOpen
}) => (
  <div className='Dashboard'>

    <div className='Header'>
      <input
        className='Search-input'
        type='search'
        placeholder='Type in something to find a quote'
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>

    <div className='u-split-view'>
      <div>
        <div className='flex'>
          <h2>My Quotes</h2>
          <button onClick={() => dispatch(toggleQuoteEditor())} className='Button--transparent'>
            <i className={`fa ${isQuoteEditorOpen ? 'fa-close' : 'fa-plus'}`} />
          </button>
        </div>

        {isQuoteEditorOpen && <QuoteEditor
          onSubmit={(quote) => dispatch(createQuote(quote))}
        />}

        <Grid items={favorites} {...{ dispatch }} />
      </div>

      <div>
        <h2>Results from WikiQuote</h2>
        <List
          items={quotes}
          {...{ dispatch, isFavorite }}
        />
      </div>
    </div>
  </div>
);

function selectFavorites({ favorites, quotes }) {
  return Object.keys(favorites)
    .filter(id => !!favorites[id])
    .map(id => quotes.items[id]);
}

function selectSearchQuotes({ quotes, favorites }) {
  return Object.keys(quotes.items)
    .filter(id => !favorites[id])
    .map(id => quotes.items[id]);
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
