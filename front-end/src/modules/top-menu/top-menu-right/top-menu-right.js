import React, { Component } from 'react';
import Login from '../login/login';
import {Icon} from 'antd';
import {Link} from 'react-router-dom'

class TopMenuRight extends Component {
  render() {
    return (
      <div className="">
        <ul className="nav navbar-nav">
          <li className="user user-menu">
            <Link to='/create' className="login">
            <Icon type="tags" style={{fontSize:'20px'}} />
            </Link>
          </li>
          <li className="user user-menu pd-right-20">
              <Login/>
          </li>
        </ul>
      </div>
    );
  }
}

export default TopMenuRight;