import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const axios = require("axios");


class NormalLoginForm extends Component {
  state = {
    login : null
  }
  componentWillMount() {
    var user = JSON.parse(localStorage.getItem('comic_user'));
    this.setState({login:user})
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        axios.post("http://localhost:5000/api/user-login",values)
          .then((response) => {
            if(response.status === 200) {
              this.setState({login:response.data})
              this.props.user(this.state.login)
              let data = JSON.stringify(this.state.login)
              localStorage.setItem ('comic_user', data);
            }
          }).catch((error) => {
        });

        // axios.post("http://localhost:5000/api/user-create",values)
        //   .then((response) => {
        //    console.log(response)
        //   }).catch((error) => {
        // });
      }
    });

  };
  handleLogout = () => {
    localStorage.removeItem('comic_user');
    this.setState({login:null});
    this.props.user({username:'Đăng nhập'})
  }

  render() {
    // this.props.user(this.state.login)

    
   
    var content = [];
    const { getFieldDecorator } = this.props.form;
    if(this.state.login) {
      content.push(
        <div key = {1}>
          <Form className="login-form text-center">
              <Button type="primary" onClick={this.handleLogout}>Đăng xuất</Button>
          </Form>
        </div>
      )
    } else {
      content.push(
        <div key = {1}>
            <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                 
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
               
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>Ghi nhớ mật khẩu</Checkbox>)}
              <a className="login-form-forgot" href="1">
                Quên mật khẩu
              </a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Đăng nhập
              </Button>
              Hoặc <a href="1" style={{color:'blue !important'}}>đăng ký ngay!</a>
            </Form.Item>
          </Form>
      </div>
      )
    }
    

    return (
      <div>
      {content}

      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm;