import React, { Component } from 'react';
import AdminHeaderItem from './item/admin-header-item';
import AdminHeaderLogo from './lead/admin-header-logo';
import Login from './login/login'
import { Icon } from 'antd';
import './top-menu.css'

class AdminHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
      menu_class : '',
    }
  }

  setToggleTopMenuClass = () => {
    if (this.state.menu_class === '') {
      this.setState({
        menu_class : 'toggled',
      })
    } else {
      this.setState({
        menu_class : '',
      })
    }
  }

  render() {
    let top_menu_class = `top-menu ${this.state.menu_class}`
    return (
       <div className = {top_menu_class}>
         <div className='content'>
          <AdminHeaderLogo/>
            <div className='left'>
              <AdminHeaderItem text='Left1'/>
            </div>
            <div className='right'>
              <Login text='Đăng nhập'/>
            </div>
            <Icon type="menu" className='top-menu-icon' onClick={this.setToggleTopMenuClass}/>
         </div>
          <div className='clear-fix' />
       </div>
    );
  }
}

export default AdminHeader;