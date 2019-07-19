import React, { Component } from 'react';
import BookInfo from '../book-info/book-info';
import BookInfoFooter from '../book-info-footer/book-info-footer';
import { Link } from "react-router-dom";
import { BackTop, Breadcrumb, Icon } from 'antd';
import {connect} from 'react-redux';
import _ from 'lodash'
import {GET_BOOK_DETAIL} from './../../../redux/action/admin/book-actions';
import EditBookSelect from './../edit-book-select/edit-book-select';
import history from './../../history'


const moment = require('moment');
class BookSelectBody extends Component {
  componentDidMount() {
    this.props.bookDetailStore(this.props.id) // su dung reducer trong store, // dispatch 'LIST_BOOKS'
  }
  render() {
    let data = this.props.bookData
    if (this.props.response) {
      data = this.props.response;
      history.push("/truyen-" + to_slug(data.name) + "." + this.props.id);
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
        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');
        // xoa dau ,
        str = str.replace(/(,)/g, ' ');
        // xoa khoang trang,
        str = str.replace(/( )/g, '-');
        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');
        // return
        return str;
      }
    }
    let name = "";
    let update = "";
    var routes = [];
    if(data) {
      name = data.name
      update = moment(data.updated_at).format('hh:mm DD-MM-YYYY');
      routes = [
        {
          path: '/',
          breadcrumbName: <Icon type="home" />,
        },
        {
          breadcrumbName: data.name,
        },
      ];
    }
    var user = JSON.parse(localStorage.getItem('comic_user'));
    let edit = []
    if(_.get(user,'is_admin', '')){
      edit.push(
        <EditBookSelect key = {1} bookData={this.props.bookData} id ={this.props.id}/>
      )
    }
    // PANIGATION
    function itemRender(route, params, routes, paths) {
      const last = routes.indexOf(route) === routes.length - 1;
      return last ? (
        <span>{route.breadcrumbName}</span>
      ) : (
        <Link to={paths.join('>')}>{route.breadcrumbName}</Link>
      );
    }
    // PANIGATION
    return (
      <div className="content-wrapper min-height-page ">
        <div className=" width-720 mg-0-auto">
          <div className="row" style={{padding: '15px 25px 5px 25px'}}>
            <div className="inline">
              <Breadcrumb itemRender={itemRender} routes={routes} />
            </div>
            <div className="inline float-right response-none">
              <span className="text-color-grey float-right">Cập nhật lúc: {update}</span>
            </div>
          </div>
          <hr/>
          <section className="content-header text-center pd-tb-20">
            <span className='book-title uppercase'>{name}</span>
            {edit}
          </section>
          <section className="content pd-bottom-30" >
            <BookInfo data = {data}/>
            <BookInfoFooter data = {data}/>
          </section>
        </div>
        <div>
          <BackTop />
          <strong style={{ color: '#000' }}></strong>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    bookData: state.bookDetail.bookData.data,
    response: state.createBook.updateBook.data,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    bookDetailStore: (filter) => {
      dispatch({ type : GET_BOOK_DETAIL, filter})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookSelectBody);