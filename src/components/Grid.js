import React, { Component, PropTypes } from 'react';
import { removeFavorite } from '../actions/FavoriteActions';

const GridItem = ({ text, author, onRemove }) => {
  return (
    <div className='GridItem'>
      <blockquote className='quote'>“{text}”</blockquote>
      <p className='author'>
        <span>&mdash; {author.name}</span>
      </p>

      <button onClick={onRemove} className='Button--transparent'>
        <i className='fa fa-close' />
      </button>
      <a href='' className='share-link'><i class="fa fa-twitter"/> Share</a>
    </div>
  );
};

export default class Grid extends Component {
  static propTypes = {
    items: PropTypes.array,
    dispatch: PropTypes.func
  }

  static defaultProps = {
    items: []
  }

  render() {
    const { items } = this.props;
    return (
      <div className='Grid'>
        {items.map(item => <GridItem
          {...item}
          onRemove={() => this.props.dispatch(removeFavorite(item.id))}
        />)}
      </div>
    );
  }
}
