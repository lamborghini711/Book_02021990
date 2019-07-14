import React, { Component } from 'react';
import LeftMenu from './../left-menu/left-menu';
import AdminHeader from './../top-menu/admin-header';
import BookDetailBody from './detail/detail';

class BookDetail extends Component {
  render() {
    let param = this.props.match.params;
    return (
      <div>
        <AdminHeader/>
        <LeftMenu/>
        <BookDetailBody param={param}/>
        <div id="tuan"></div>
      </div>
    );
  }
}

export default BookDetail;