import React, { Component } from 'react';
import { Input } from 'antd';
import Login from '../login/login';

const { Search } = Input;

class TopMenuRight extends Component {
  render() {
    return (
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          {/* search */}
          <li>
            <Search
              placeholder="Tên truyện"
              onSearch={value => console.log(value)}
              style={{ width: 400, lineHeight: '51px', paddingRight: '5px' }}
            />
          </li>
          {/* Login */}
          <li className="user user-menu pd-right-20">
              <Login/>
          </li>
        </ul>
      </div>
    );
  }
}

export default TopMenuRight;