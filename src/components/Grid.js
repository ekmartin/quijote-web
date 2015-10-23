import React, { Component, PropTypes } from 'react';
import randomColor from 'randomcolor';

const GridItem = ({ text, author, color }) => {
  return (
    <div className='GridItem' style={{
      backgroundColor: color
    }}>
      <blockquote className='quote'>{text}</blockquote>
      <span>&mdash; {author.name}</span>
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
          color={randomColor()}
        />)}
      </div>
    );
  }
}
