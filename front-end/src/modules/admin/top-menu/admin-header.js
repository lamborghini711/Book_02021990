import React, { Component } from 'react';

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
            <div className="navbar-custom-menu">
              <ul className="nav navbar-nav">
                {/* Messages: style can be found in dropdown.less*/}
                <li className="dropdown messages-menu">
                  <a href="1" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-envelope-o" />
                    <span className="label label-success">4</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="header">You have 4 messages</li>
                    <li>
                      {/* inner menu: contains the actual data */}
                      <ul className="menu">
                        <li>{/* start message */}
                          <a href="1">
                            <div className="pull-left">
                              <img src="../../dist/img/user2-160x160.jpg" className="img-circle" alt="User" />
                            </div>
                            <h4>
                              Support Team
                              <small><i className="fa fa-clock-o" /> 5 mins</small>
                            </h4>
                            <p>Why not buy a new awesome theme?</p>
                          </a>
                        </li>
                        {/* end message */}
                      </ul>
                    </li>
                    <li className="footer"><a href="1">See All Messages</a></li>
                  </ul>
                </li>
                {/* Notifications: style can be found in dropdown.less */}
                <li className="dropdown notifications-menu">
                  <a href="1" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-bell-o" />
                    <span className="label label-warning">10</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="header">You have 10 notifications</li>
                    <li>
                      {/* inner menu: contains the actual data */}
                      <ul className="menu">
                        <li>
                          <a href="1">
                            <i className="fa fa-users text-aqua" /> 5 new members joined today
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="footer"><a href="1">View all</a></li>
                  </ul>
                </li>
                {/* Tasks: style can be found in dropdown.less */}
                <li className="dropdown tasks-menu">
                  <a href="1" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-flag-o" />
                    <span className="label label-danger">9</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="header">You have 9 tasks</li>
                    <li>
                      {/* inner menu: contains the actual data */}
                      <ul className="menu">
                        <li>{/* Task item */}
                          <a href="1">
                            <h3>
                              Design some buttons
                              <small className="pull-right">20%</small>
                            </h3>
                            <div className="progress xs">
                              <div className="progress-bar progress-bar-aqua" style={{width: '20%'}} role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                                <span className="sr-only">20% Complete</span>
                              </div>
                            </div>
                          </a>
                        </li>
                        {/* end task item */}
                      </ul>
                    </li>
                    <li className="footer">
                      <a href="1">View all tasks</a>
                    </li>
                  </ul>
                </li>
                {/* User Account: style can be found in dropdown.less */}
                <li className="dropdown user user-menu">
                  <a href="1" className="dropdown-toggle" data-toggle="dropdown">
                    <img src="/img/icon-web/user2-160x160.jpg" className="user-image" alt="User" />
                    <span className="hidden-xs">Alexander Pierce</span>
                  </a>
                  <ul className="dropdown-menu">
                    {/* User */}
                    <li className="user-header">
                      <img src="/img/icon-web/user2-160x160.jpg" className="img-circle" alt="User" />
                      <p>
                        Alexander Pierce - Web Developer
                        <small>Member since Nov. 2012</small>
                      </p>
                    </li>
                    {/* Menu Body */}
                    <li className="user-body">
                      <div className="row">
                        <div className="col-xs-4 text-center">
                          <a href="1">Followers</a>
                        </div>
                        <div className="col-xs-4 text-center">
                          <a href="1">Sales</a>
                        </div>
                        <div className="col-xs-4 text-center">
                          <a href="1">Friends</a>
                        </div>
                      </div>
                      {/* /.row */}
                    </li>
                    {/* Menu Footer*/}
                    <li className="user-footer">
                      <div className="pull-left">
                        <a href="1" className="btn btn-default btn-flat">Profile</a>
                      </div>
                      <div className="pull-right">
                        <a href="1" className="btn btn-default btn-flat">Sign out</a>
                      </div>
                    </li>
                  </ul>
                </li>
                {/* Control Sidebar Toggle Button */}
                <li>
                  <a href="1" data-toggle="control-sidebar"><i className="fa fa-gears" /></a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default AdminHeader;