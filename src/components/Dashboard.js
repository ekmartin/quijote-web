import React from 'react';
import QuoteEditor from './QuoteEditor';
import { createQuote } from '../actions/QuoteActions';
import Grid from './Grid';
import List from './List';

export default class Dashboard extends React.Component {
  state = {
    searching: false
  }

  renderSide() {
    const { quotes } = this.props;

    if (this.state.searching) {
      return (
        <div>
          <h2>Search Results:</h2>
          <List
            items={quotes}
            {...this.props}
          />
        </div>
      );
    }

    return (
      <div className='intro'>
        <h1>Quijote</h1>
        <h3>{'“What a sad era when it is easier to smash an atom than a prejudice.”'}</h3>
        <h4>&mdash; Albert Einstein</h4>
      </div>
    );
  }

  startSearch(e) {
    this.setState({
      searching: e.target.value.length > 0
    });

    this.props.onSearch(e.target.value);
  }

  render() {
    const { props } = this;

    return (
        <div className='Dashboard'>
        <div className='Header'>
          <input
            className='Search-input'
            type='search'
            placeholder='Type in something to find a quote'
            onChange={this.startSearch.bind(this)}
          />
        </div>

        <div className='u-split-view'>
          <div>
            <div className='flex'>
              <h2>My Quotes</h2>
              <button onClick={() => props.dispatch(props.toggleQuoteEditor())} className='Button--transparent'>
                <i className={`fa ${props.isQuoteEditorOpen ? 'fa-close' : 'fa-plus'}`} />
              </button>
            </div>

            {props.isQuoteEditorOpen && <QuoteEditor
              onSubmit={(quote) => props.dispatch(createQuote(quote))}
            />}

            <Grid items={props.favorites} />
          </div>
          {this.renderSide()}
        </div>
      </div>
    );
  }
}
