import React, { Component } from 'react';
import BookInfo from '../book-info/book-info';
import BookInfoFooter from '../book-info-footer/book-info-footer';
import { BackTop } from 'antd';
import {connect} from 'react-redux';
import {GET_BOOK_DETAIL} from './../../../redux/action/admin/book-actions';
const moment = require('moment');

class BookSelectBody extends Component {
  componentWillMount() {
    this.props.bookDetailStore(this.props.id) // su dung reducer trong store, // dispatch 'LIST_BOOKS'
  }
  render() {
    let data = this.props.bookData
    let name = "";
    let update = "";
    if(data) {
      name = data.name
      update = moment(data.updated_at).format('hh:mm DD-MM-YYYY');
    }
    return (
      <div className="content-wrapper min-height-page ">
        <div className=" width-720 mg-0-auto">
          <section className="content-header text-center pd-tb-20">
            <div className='book-title'>{name}</div>
            <div className="text-color-grey font-13">Cập nhật lúc: {update}</div>
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
    bookData: state.bookDetail.bookData.data
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