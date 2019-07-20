import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Breadcrumb, Icon } from 'antd';
import moment from 'moment';
import {connect} from 'react-redux';
import {UPDATE_BOOK} from './../../../redux/action/admin/create-book-action';


class DetailHeader extends Component {
  render() {
  var item = this.props.data
  var chapter = this.props.param.chapter;
  var slug = this.props.param.slug
  var routes = [];
  var name = "";
  var time = ""
  if(item) {
    let obj = {
      book_id : item.book_id,
      read : item.read + 1
    };
    this.props.updateBook(obj)
    routes = [
      {
        path: '/',
        breadcrumbName: <Icon type="home" />,
      },
      {
        path: "truyen-" + slug + "." + item.book_id,
        breadcrumbName: item.name,
      },
      {
        path: 'detail',
        breadcrumbName: 'Chương ' + chapter,
      },
    ];
    name = item.name
    time = moment(item.updated_at).format('hh:mm DD/MM/YYYY')
  }
  function itemRender(route, params, routes, paths) {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <Link to={paths.join('>')}>{route.breadcrumbName}</Link>
    );
  }
    return (
      <div className="resonse-content-header width-720 mg-0-auto">
       <div className="row" style={{padding: '0 25px'}}>
        <div className="inline">
          <Breadcrumb itemRender={itemRender} routes={routes} />
        </div>
        <div className="inline float-right response-none">
          <span className="text-color-grey float-right">Cập nhật lúc: {time}</span>
        </div>
       </div>
       <hr/>
        <div className="text-center pd-tb-10">
          <span className='book-title uppercase'>{name}</span>
        </div>
        <div className="text-center pd-top-10">
          <div>
            Nếu không xem được truyện vui lòng đổi "SERVER ẢNH" bên dưới
          </div>
          <div className="pd-top-10">
            <Button type='default' className='mg-right-10'>Sever 1</Button>
            <Button type='default' className='mg-right-10'>Sever 2</Button>
          </div>
          <div className="pd-top-10">
            Nếu vẫn không đọc được truyện, hoặc truyện chưa được dịch, up không đúng truyện, vui lòng 
            <a href="a"> bình luận </a>
            bên dưới hoặc nhấn
            <a href="a"> Báo lỗi </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateBook: (obj) => {
      dispatch({ type: UPDATE_BOOK, obj })
    },
  }
}

export default connect(null, mapDispatchToProps)(DetailHeader);