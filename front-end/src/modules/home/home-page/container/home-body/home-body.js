import React, { Component } from 'react';
import { BackTop } from 'antd';
import ListBook from './../list-book/list-book';
import HotBook from './../hot-book/hot-book';
import TruyenDeCu from '../list-book/truyen-de-cu';
import {GET_LIST_BOOKS_HOT, GET_LIST_BOOKS, GET_LIST_BOOKS_APPOINT} from '../../../../../redux/action/admin/book-actions';
import {connect} from 'react-redux';

class HomeBody extends Component {
  componentDidMount() {
    this.props.hotBookStore()
    this.props.appointBookStore()
    this.props.listBookStore()
  }
  paniga = e => {
    this.props.listBookStore(e)
  }
  render() {
    return (
      <div className="content-wrapper body-bg pd-top-20 min-height-page response">
        <section className="content-header width-list-book mg-0-auto">
          <HotBook/>
          <TruyenDeCu/>
          <ListBook paniga = {this.paniga}/>
        </section>
        <div>
          <BackTop />
          <strong style={{ color: '#000' }}></strong>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    hotBookStore: () => {
      dispatch({ type : GET_LIST_BOOKS_HOT, book_hot:true })
    },
    listBookStore: (filter) => {
      dispatch({ type : GET_LIST_BOOKS, filter})
    },
    appointBookStore: () => {
      dispatch({ type : GET_LIST_BOOKS_APPOINT, book_appoint:true})
    }
    
  }
}
export default connect(null, mapDispatchToProps)(HomeBody);