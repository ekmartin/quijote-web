import React, { Component, PropTypes } from 'react';
import { removeFavorite } from '../actions/FavoriteActions';

const GridItem = ({ text, author, onRemove }) => {
  const shareText = `“${text}” - ${author.name}`;
  const shareLink = `https://twitter.com/share?hashtags=quijote&text=${shareText}&data-url=""`
  return (
    <div className='GridItem'>
      <blockquote className='quote'>“{text}”</blockquote>
      <p className='author'>
        <span>&mdash; {author.name}</span>
      </p>

      <button onClick={onRemove} className='Button--transparent'>
        <i className='fa fa-close' />
      </button>
      <a href={shareLink} className='share-link'><i className="fa fa-twitter"/></a>
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
