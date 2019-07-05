import React, { Component } from 'react';
import TopMenuRight from './top-menu-right/top-menu-right';

class AdminHeader extends Component {

  render() {
    return (
      <div className = "">
      
        <header className="main-header">
          {/* Logo */}
          <a href="../../index2.html" className="logo">
            {/* mini logo for sidebar mini 50x50 pixels */}
            <span className="logo-mini"><b>A</b>LT</span>
            {/* logo for regular state and mobile devices */}
            <span className="logo-lg"><b>Admin</b>LTE</span>
          </a>
          {/* Header Navbar: style can be found in header.less */}
          <nav className="navbar navbar-static-top">
          {/* Sidebar toggle button*/}
          <a href="1" className="sidebar-toggle" data-toggle="push-menu" role="button">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </a>
          <TopMenuRight/>
        </nav>
         
        </header>
      </div>
    );
  }
}

export default AdminHeader;