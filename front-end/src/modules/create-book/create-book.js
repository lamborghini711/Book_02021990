import React, { Component } from 'react';
import AdminHeader from '../top-menu/admin-header';
import LeftMenu from '../left-menu/left-menu';
import CreateBookBody from './create-book-body/create-book-body';
import { Alert } from 'antd';
import _ from 'lodash'


class CreateBook extends Component {

  render() {
    var user = JSON.parse(localStorage.getItem('comic_user'));
    if(!_.get(user,'is_admin', '')){
      setTimeout(() => {
        this.props.history.goBack();
      }, 2000);
      return (
        <div className="text-center" style={{backgroundColor:'#fff', height: '100vh'}}>
          <div >
          <Alert  message="Bạn không có quyền truy cập vào trang này, tự động rời trang sau 3 giây!" type="error" />
          </div>
         <div>
           <img src="img/icon-web/CodePen-404-Page.gif" alt='404'/>
         </div>
        </div>
      );
    }
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