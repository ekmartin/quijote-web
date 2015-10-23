import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import QuoteEditor from './QuoteEditor';
import { search, toggleQuoteEditor } from '../actions/QuoteActions';
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

        {isQuoteEditorOpen && <QuoteEditor />}

        <Grid items={favorites} />
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

function selectFavorites(state) {
  return Object.keys(state.favorites)
    .filter(id => !!state.favorites[id])
    .map(id => state.quotes.items[id]);
}

@connect(state => ({
  favorites: selectFavorites(state),
  isFavorite: (id) => !!state.favorites[id],
  quotes: Object.keys(state.quotes.items).map(id => state.quotes.items[id]),
  isQuoteEditorOpen: state.quotes.isQuoteEditorOpen
}))
export default class DashboardRoute extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    quotes: PropTypes.array.isRequired
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
