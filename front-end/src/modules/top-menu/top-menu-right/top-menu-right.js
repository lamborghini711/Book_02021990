import React, { Component } from 'react';
import Login from '../login/login';
import {Icon} from 'antd';
import {Link} from 'react-router-dom';
import _ from 'lodash'

class TopMenuRight extends Component {

  render() {
    var user = JSON.parse(localStorage.getItem('comic_user'));
    let create = []
    if(_.get(user,'is_admin', '')){
      create.push(
        <li key={1} className="user user-menu">
          <Link to='/create' className="login">
          <Icon type="tags" style={{fontSize:'20px'}} />
          </Link>
        </li>
      )
    }
    return (
      <div className="">
        <ul className="nav navbar-nav">
          {create}
          <li className="user user-menu pd-right-20">
              <Login/>
          </li>
        </ul>
      </div>
    );
  }
}

export default TopMenuRight;