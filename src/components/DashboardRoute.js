import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'rc-dialog';
import { search } from '../actions/QuoteActions';
import Grid from './Grid';
import List from './List';

const Dashboard = ({ onSearch, quotes }) => (
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
          <button className='Button--transparent'>Add a new</button>
        </div>

        <Grid items={[
          { title: 'Hello World' },
          { title: 'From the editor' },
          { title: 'I like this' },
          { title: 'Very much'},
          { title: 'Please go' }
        ]}/>
      </div>

      <div>
        <h2>Results from WikiQuote</h2>
        <List items={quotes} />
      </div>
    </div>
  </div>
);

@connect(state => ({
  quotes: state.quotes
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
        onSearch={query => dispatch(search(query))}
      />
    );
  }
}
