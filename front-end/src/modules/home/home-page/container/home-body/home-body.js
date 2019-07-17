import React, { Component } from 'react';
import { BackTop } from 'antd';
import ListBook from './../list-book/list-book';
import HotBook from './../hot-book/hot-book';
import TruyenDeCu from '../list-book/truyen-de-cu';
import {GET_LIST_BOOKS_HOT} from '../../../../../redux/action/admin/book-actions';
import {connect} from 'react-redux';

class HomeBody extends Component {
  componentDidMount() {
    this.props.hotBookStore() // su dung reducer trong store, // dispatch 'LIST_BOOKS'
  }
  render() {
    return (
      <div className="content-wrapper body-bg pd-top-20 min-height-page response">
        <section className="content-header width-list-book mg-0-auto">
          <HotBook bookData={this.props.bookData}/>
        </section>
        <section className="content width-list-book mg-0-auto" style={{paddingTop: '0px'}}>
          <TruyenDeCu bookData={this.props.bookData}/>
          <ListBook/>
        </section>
        <div>
          <BackTop />
          <strong style={{ color: '#000' }}></strong>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    bookData: state.listBooks.bookHotData.data
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    hotBookStore: (book_hot) => {
      dispatch({ type : GET_LIST_BOOKS_HOT, book_hot:true })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeBody);