import React, { Component, PropTypes } from 'react';
import randomColor from 'randomcolor';

const GridItem = ({ text, author, color }) => {
  return (
    <div className='GridItem' style={{
      backgroundColor: color
    }}>
      <blockquote className='quote'>“{text}”</blockquote>
      <p className='author'>
        <span>&mdash; {author.name}</span>
      </p>
    </div>
  );
};

export default class Grid extends Component {
  static propTypes = {
    items: PropTypes.array
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
          color={'#ecf0f1'}
        />)}
      </div>
    );
  }
}
