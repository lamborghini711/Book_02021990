import React, { Component } from 'react';
import AdminHeader from '../top-menu/admin-header';
import LeftMenu from '../left-menu/left-menu';
import EditBookBody from './edit-book-body/edit-book-body';


class EditBook extends Component {
  render() {
    return (
      <div>
        <AdminHeader/>
        <LeftMenu/>
        <EditBookBody/>
        <div id="tuan"></div>
      </div>
    );
  }
}

export default EditBook;