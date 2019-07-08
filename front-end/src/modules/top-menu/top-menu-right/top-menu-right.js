import React, { Component } from 'react';
import Login from '../login/login';

class TopMenuRight extends Component {
  render() {
    return (
      <div className="">
        <ul className="nav navbar-nav">
          <li className="user user-menu pd-right-20">
              <Login/>
          </li>
        </ul>
      </div>
    );
  }
}

export default TopMenuRight;