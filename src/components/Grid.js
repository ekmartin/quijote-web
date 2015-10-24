import React, { Component, PropTypes } from 'react';
import { removeFavorite } from '../actions/FavoriteActions';

const randomColor = () => {
  const colors = [
    '#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e',
    '#16a085', '#27ae60', '#f1c40f', '#e67e22', '#e74c3c',
    '#ecf0f1'
  ];
  return colors[(Math.random() * colors.length) | 0];
};

const GridItem = ({ text, author, color, onRemove }) => {
  return (
    <div className='GridItem' style={{
      backgroundColor: color
    }}>
      <blockquote className='quote'>“{text}”</blockquote>
      <p className='author'>
        <span>&mdash; {author.name}</span>
      </p>

      <button onClick={onRemove} className='Button--transparent'>
        <i className='fa fa-close' />
      </button>
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
          color={randomColor()}
          onRemove={() => this.props.dispatch(removeFavorite(item.id))}
        />)}
      </div>
    );
  }
}
