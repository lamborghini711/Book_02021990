import React, { Component } from 'react';
import TopMenuRight from './top-menu-right/top-menu-right';
import { Link } from "react-router-dom";

class AdminHeader extends Component {
  render() {
    return (
      <div>
        <header className="main-header">
          <Link to="/" className="logo">
            <span className="logo-lg"><b>Admin</b>LTE</span>
          </Link>
          {/* Header Navbar: style can be found in header.less */}
          <nav className="navbar navbar-static-top">
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