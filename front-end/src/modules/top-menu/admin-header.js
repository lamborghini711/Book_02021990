import React, { Component } from 'react';
import TopMenuRight from './top-menu-right/top-menu-right';
import { Link } from "react-router-dom";
import { Input } from 'antd';

const { Search } = Input;

class AdminHeader extends Component {
  render() {
    return (
      <div>
        <header className="main-header">
          <nav className="navbar navbar-static-top">
             <div className="row">
                <div className="col-md-4">
                  <a href="1" className="sidebar-toggle" data-toggle="push-menu" role="button" style={{backgroundColor:'#272727'}}>
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </a>
                  <Link to="/" className="logo">
                    {/* mini logo for sidebar mini 50x50 pixels */}
                    <span className="logo-mini"><b>A</b>LT</span>
                    {/* logo for regular state and mobile devices */}
                    <span className="logo-lg"><b>Truyện</b> COMIC</span>
                  </Link>
                </div>
                <div className="col-md-4 text-center">
                  <span>
                    <Search
                      placeholder="Tìm kiếm"
                      onSearch={value => console.log(value)}
                      style={{ width: 640, lineHeight: '51px', paddingRight: '5px' }}
                    />
                  </span>
                </div>
                <div className="col-md-4 text-right">
                  <TopMenuRight/>
                </div>
             </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default AdminHeader;