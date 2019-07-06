import React, { Component } from 'react';
import { Modal } from 'antd';
import WrappedNormalLoginForm from './form-login'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className="login" >
         <div type="primary" onClick={this.showModal} style={{height: '51px', padding: '15px 8px'}}>
         <img src="/img/icon-web/user2-160x160.jpg" className="user-image" alt="User" />
              <span className="hidden-xs">Đăng nhập</span>
        </div>
        <Modal
          title="Đăng nhập"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          width={350}
          footer={null}
        >
          <WrappedNormalLoginForm/>
        </Modal>
        </div>
    );
  }
}

export default Login;