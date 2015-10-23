import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'rc-dialog';
import { search } from '../actions/QuoteActions';
import Grid from './Grid';
import List from './List';

const Dashboard = ({ onSearch, favorites, quotes, dispatch, isFavorite }) => (
  <div className='Dashboard'>
    <Dialog visible={false} onClose={() => {}}>
      <label>Author</label>
      <input type='text' />

      <label>Quote</label>
      <textarea />
    </Dialog>

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
          <button className='Button--transparent'><i className='fa fa-plus' /></button>
        </div>

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
  quotes: Object.keys(state.quotes.items).map(id => state.quotes.items[id])
}))
export default class DashboardRoute extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  render() {
    const { dispatch } = this.props;
    return (
      <Dashboard
        onSearch={query => dispatch(search(query))}
        {...this.props}
      />
    );
  }
}
