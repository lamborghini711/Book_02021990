import React, { Component } from 'react';
import LeftMenu from './../left-menu/left-menu';
import AdminHeader from './../top-menu/admin-header';
import BookDetailBody from './detail/detail';

class BookDetail extends Component {
  render() {
    return (
      <div>
        <AdminHeader/>
        <LeftMenu/>
        <BookDetailBody/>
        <div id="tuan"></div>
      </div>
    );
  }
}

export default BookDetail;