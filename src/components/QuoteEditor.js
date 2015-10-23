import React, { Component } from 'react';

export default class QuoteEditor extends Component {

  handleSubmit(e) {
    e.preventDefault();
    const author = this.refs.author.value.trim();
    const text = this.refs.text.value.trim();

    if (!author || !text) {
      return;
    }

    console.log(author, text);
  }

  render() {
    return (
      <form onSubmit={::this.handleSubmit}>
        <input ref='author' type='text' placeholder='Who said this?' autoFocus />
        <textarea ref='text' placeholder='What were the exact words' />
        <button type='submit'>Save for eternity</button>
      </form>
    );
  }
}
