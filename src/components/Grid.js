import React, { Component, PropTypes } from 'react';
import randomColor from 'randomcolor';

const GridItem = ({ title }) => {
  const backgroundColor = randomColor();
  return (
    <div className='GridItem' style={{
      backgroundColor
    }}>
      <blockquote className='quote'>{title}</blockquote>
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
        {items.map(item => <GridItem {...item} />)}
      </div>
    );
  }
}
