import React, { Component } from 'react';
import LeftMenu from './../left-menu/left-menu';
import AdminFooter from './../footer/admin-footer';
import AdminHeader from './../top-menu/admin-header';
import BookSelectBody from './book-body/book-select-body';

class BookSelect extends Component {
  render() {
    return (
      <div>
        <AdminHeader/>
        <LeftMenu/>
        <BookSelectBody/>
        <AdminFooter/>
      </div>
    );
  }
}

export default BookSelect;