import React, { Component } from 'react';
import AdminHeader from '../top-menu/admin-header';
import LeftMenu from '../left-menu/left-menu';
import CreateBookBody from './create-book-body/create-book-body';


class CreateBook extends Component {
  render() {
    return (
      <div>
        <AdminHeader/>
        <LeftMenu/>
        <CreateBookBody/>
      </div>
    );
  }
}

export default CreateBook;