import React, { Component } from 'react';
import LeftMenu from './../left-menu/left-menu';
import AdminHeader from './../top-menu/admin-header';
import BookSelectBody from './book-body/book-select-body';

class BookSelect extends Component {
  render() {
    let id = this.props.match.params.id;
    return (
      <div>
        <AdminHeader id = {id}/>
        <LeftMenu/>
        <BookSelectBody id = {id}/>
      </div>
    );
  }
}

export default BookSelect;