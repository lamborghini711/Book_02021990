import React, { Component } from 'react';
import DeatailHeader from './../detail-header/header'
import DetailFooter from '../detail-footer/detail.footer';
import DetailBody from '../detail-body/detail-body';
import { BackTop } from 'antd';
import {connect} from 'react-redux';
import {GET_BOOK_DETAIL} from './../../../redux/action/admin/book-actions';

class BookDetailBody extends Component {
  componentDidMount() {
    this.props.bookDetailStore(this.props.param.id)
  }
  render() {
    let data = this.props.chapterData;
    return (
      <div className="content-wrapper body-bg pd-tb-20 pd-lr-40" style={{ minHeight : '1300px'}}>
        <section className="content-header">
          <DeatailHeader data={data} param={this.props.param}/>
          <DetailBody  data={data} param={this.props.param}/>
          <DetailFooter/>
          <div>
            <BackTop />
            <strong style={{ color: '#000' }}></strong>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    chapterData: state.bookDetail.bookData.data
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    bookDetailStore: (filter) => {
      dispatch({ type : GET_BOOK_DETAIL, filter})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailBody);