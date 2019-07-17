import React, { Component } from 'react';
import {connect} from 'react-redux';
import TopMenuRight from './top-menu-right/top-menu-right';
import { Link } from "react-router-dom";
import { Input } from 'antd';
import {HANDLE_MENU} from './../../redux/action/admin/user-action';
import { HamburgerArrow } from 'react-animated-burgers'

const { Search } = Input;

class AdminHeader extends Component {
  state = {
    isOff : false,
  }
  _onFocus(value) {
    // console.log(value)
    // var element = document.getElementById("tuan");
    // element.classList.add("scroll-down");
    // if (!this.state.focus) {
    //     this.setState({
    //         focus: true,
    //     });
    // }
  }

  componentDidMount(){
    var w = window.innerWidth;
    // var h = window.innerHeight;
    if(this.props.id && w > 767) {
      this.props.handleMenuStore(true)
      this.setState({isOff:true})
    } else {
      this.props.handleMenuStore(false)
      this.setState({isOff:false})
    }
  }
  toggleButton = () => {
    if(this.state.isOff === false) {
      this.props.handleMenuStore(true)
      this.setState({isOff:true})
    } else {
      this.props.handleMenuStore(false)
      this.setState({isOff:false})
    }
  }
  render() {
    return (
      <div>
        <header className="main-header">
          <nav className="navbar navbar-static-top">
             <div className="row">
                <div className="col-md-4">
                <HamburgerArrow className="my-styles" isActive={this.state.isOff} toggleButton={this.toggleButton} buttonColor="#FFBC67" barColor="white" />
                  <Link to="/" className="logo">
                    <span className=""><b>Truyện</b> COMIC</span>
                  </Link>
                </div>
                <div className="col-md-4 text-center">
                  <span className="me" style={{ lineHeight: '51px' }}>
                    <Search
                      placeholder="Tìm kiếm"
                      onSearch={value => this._onFocus(value)}
                      id = "response-search"
                    />
                  </span>
                </div>
                <div className="col-md-4 text-right top-right">
                  <TopMenuRight/>
                </div>
             </div>
          </nav>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    handleMenu: state.listBooks.handleMenu
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleMenuStore: (offMenu) => {
      dispatch({ type : HANDLE_MENU, offMenu})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminHeader);