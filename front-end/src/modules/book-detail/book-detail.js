import React, { Component } from 'react';
import LeftMenu from './../left-menu/left-menu';
import AdminFooter from './../footer/admin-footer';
import AdminHeader from './../top-menu/admin-header';
import BookDetailBody from './detail/detail';

class BookDetail extends Component {
  render() {
    return (
      <div>
        <AdminHeader/>
        <LeftMenu/>
        <BookDetailBody/>
        <AdminFooter/>
      </div>
    );
  }
}

export default BookDetail;