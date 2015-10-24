import React, { Component, PropTypes } from 'react';

export default class QuoteEditor extends Component {

  static propTypes = {
    onSubmit: PropTypes.func
  }

  handleSubmit(e) {
    e.preventDefault();

    const { onSubmit } = this.props;

    const author = this.refs.author.value.trim();
    const text = this.refs.text.value.trim();
    const isPrivate = this.refs.private.checked;

    if (!author || !text) {
      return;
    }

    onSubmit({ author, text, 'private': isPrivate });
  }

  render() {
    return (
      <form onSubmit={::this.handleSubmit}>
        <input ref='author' type='text' placeholder='Who said this?' autoFocus />
        <textarea ref='text' placeholder='What were the exact words' />
        <label><input ref='private' type='checkbox' /> this shit is private yo</label>
        <button type='submit'>Save for eternity</button>
      </form>
    );
  }
}
