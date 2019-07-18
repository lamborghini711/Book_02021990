import React, { Component } from 'react';
import {connect} from 'react-redux';
import TopMenuRight from './top-menu-right/top-menu-right';
import { Link,} from "react-router-dom";
import { AutoComplete, Select } from 'antd';
import {HANDLE_MENU} from './../../redux/action/admin/user-action';
import { GET_BOOK_SEARCH, GET_BOOK_DETAIL } from "./../../redux/action/admin/book-actions";
import { HamburgerArrow } from 'react-animated-burgers'

const Option = Select.Option
function to_slug(str){
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();     
  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
  str = str.replace(/(đ)/g, 'd');
  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');
  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');
  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, '');
  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, '');
  // return
  return str;
}

class AdminHeader extends Component {
  state = {
    isOff : false,
  }

  search = e => {
    if (e.length > 1) {
      this.props.search(to_slug(e))
    }
  }
  handleSelect = e => {
    this.props.bookDetailStore(this.props.bookSearch.data[e].book_id)
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
    let dataSearch = []
    if(this.props.bookSearch.data){
      console.log(this.props.bookSearch)
      let list = this.props.bookSearch.data;
      for (let i = 0; i < list.length; i++) {
        dataSearch.push(
          <Option key={i}  text={list[i].name}>
              <Link  to={"/truyen-" + to_slug(list[i].name) + "." + list[i].book_id} >
                <div className='row text-left'>
                  <div className='col-md-1 text-left' style={{width:'20px',paddingTop: '12px',color:'#272727'}}>{i+1}</div>
                  <div className='col-md-2 text-left' style={{width:'63px'}}>
                  <img src={list[i].cover} className="img-search" alt="User" />
                  </div >
                  <div className='col-md-9' style={{color:'#272727',paddingTop: '12px'}}>{list[i].name}</div>
                </div>
              </Link>
          </Option>
        )
      }
    }
    
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
                  <div className="row">
                  <span className="me" style={{ lineHeight: '51px' }}>
                  <AutoComplete
                    dataSource={dataSearch}
                    style={{ width: '100%' }}
                    onChange={this.search}
                    placeholder='Tìm kiếm'
                    optionLabelProp='text' 
                    onSelect={this.handleSelect}
                  />
                   
                 
                  </span>
                  <span className="icon-search-me">
                  <i className="fa fa-search certain-category-icon" aria-hidden="true"></i>
                  </span>
                  </div>
                  
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
    handleMenu: state.listBooks.handleMenu,
    bookSearch: state.listBooks.bookSearch,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleMenuStore: (offMenu) => {
      dispatch({ type : HANDLE_MENU, offMenu})
    },
    search: (filter) => {
      dispatch({type : GET_BOOK_SEARCH, filter})
    },
    bookDetailStore: (filter) => {
      dispatch({ type : GET_BOOK_DETAIL, filter})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminHeader);