import React, { Component, PropTypes } from 'react';

const ListItem = ({ title, expanded }) => (
  <div className='ListItem'>
    {title}
  </div>
);

export default class List extends Component {
  static propTypes = {
    items: PropTypes.array
  }

  render() {
    const { items } = this.props;
    return (
      <div className='List'>
        {items.map(item => <ListItem {...item} />)}
      </div>
    );
  }
}
