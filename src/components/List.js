import React, { Component, PropTypes } from 'react';
import { toggleFavorite } from '../actions/FavoriteActions';

const ListItem = ({ title, expanded, toggle, isFavorite }) => (
  <div className='ListItem'>
    <div className='flex'>
      {title}
      <div>
        <i
          onClick={toggle}
          className='fa fa-star'
          style={{
            color: isFavorite ? 'yellow' : '#eee',
            cursor: 'pointer'
          }}
        />
      </div>
    </div>
  </div>
);

export default class List extends Component {
  static propTypes = {
    items: PropTypes.array,
    dispatch: PropTypes.func,
    isFavorite: PropTypes.func
  }

  render() {
    const { dispatch, items, isFavorite } = this.props;
    return (
      <div className='List'>
        {items.map(item => <ListItem
          {...item}
          toggle={() => dispatch(toggleFavorite(item.id))}
          isFavorite={isFavorite(item.id)}
        />)}
      </div>
    );
  }
}
