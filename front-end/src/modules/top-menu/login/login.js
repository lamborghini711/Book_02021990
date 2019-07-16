import React, { Component } from 'react';
import { Modal } from 'antd';
import WrappedNormalLoginForm from './form-login'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      visible: false,
      userLog: null
    }
  }


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
  updateState = user => {
    if (user) {
      this.setState({
        visible: false,
        userLog: user
      });
    }
  }

  componentWillMount() {
    var user = JSON.parse(localStorage.getItem('comic_user'));
    this.setState({userLog:user})
  }

  render() {
    var name = "Đăng nhập";
    var login = this.state.userLog;
    if(login) {
      name = login.username;
    }
    return (
      <div className="login" >
         <div className="avatar-menu" type="primary" onClick={this.showModal}>
         <img src="/img/icon-web/user2-160x160.jpg" className="user-image" alt="User" />
              <span className="hidden-xs">{name}</span>
        </div>
        <Modal
          title="Đăng nhập"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          width={350}
          footer={null}
        >
          <WrappedNormalLoginForm user={this.updateState} />
        </Modal>
        </div>
    );
  }
}

export default Login;