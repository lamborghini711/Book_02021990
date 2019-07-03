import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import { Icon } from 'antd';

class Login extends Component {
  render() {
    return (
      <div>
        <div className='menu-items'>
          <Router>
            <div>
              <ul>
                <li>
                  <Link to="/public">Public Page</Link>
                </li>
                <li>
                  <Link to="/protected">Protected Page</Link>
                </li>
              </ul>
          
            </div>
          </Router>
        </div>
        <div className='login'>
          <Icon type="user"  style={{ fontSize: '16px', display: 'inline-grid', paddingRight: '10px',}} /> 
          <span>Đăng nhập</span>
        </div>
       
      </div>
    );
  }
}

export default Login;