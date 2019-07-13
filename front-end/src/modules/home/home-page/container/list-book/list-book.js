import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card, Badge, Icon } from 'antd';
import FilterHomePage from '../filter-home-page/filter-home-page';
import {connect} from 'react-redux';
import {GET_LIST_BOOKS} from '../../../../../redux/action/admin/book-actions'
const { Meta } = Card;

let item = '/img/thumb/poster_02.jpg'


const listBook = [];
let limit = 24;
for(let i=1 ; i<=limit; i++) {
  listBook.push(
    <div className="col-card" key={i}>
      <Link to="/select">
        <Badge count={'99'}>
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src={item} />}
          >
            <Meta title="Chí Tôn Võ Đế" description="Europe Street beat" />
          </Card>
        </Badge>
      </Link>
      <div className="row response mg-all-0">
        <div className="col-md-2 text-color-primary pd-all-0">
          <Icon type="heart" theme="filled" />
        </div>
        <div className="col-md-2 text-color-grey pd-all-0" >
          <Icon type="star" theme="filled" />
        </div>
        <div className="col-md-8 text-right text-color-grey pd-all-0" >
          <Icon type="eye" theme="filled" />
        <span className="font-11 pd-left-5">1.9M</span>
        </div>
      </div>
    </div>
  )
}

class ListBook extends Component {
  componentDidMount() {
    this.props.listBookStore() // su dung reducer trong store, // dispatch 'LIST_BOOKS'
  }

  render() {
    let items = this.props.bookData;
    console.log(items)
    return (
      <div>
        <div className="row pd-bottom-20 pd-top-10 response">
          <div className="col-md-3 response" >
            <h4 className="mg-all-0 font-600 text-color-light">
              <Icon type="book" style={{  paddingRight: '3px', fontSize: '22px', fontWeight: 'bold' }} /> Truyện mới cập nhật
            </h4>
          </div>
          <div className="col-md-9 text-right">
          <a href='123'>Xem tất cả</a>
          </div>
        </div>
        <FilterHomePage/>
          <div className="row justify-content-md-center pd-top-10">
            {listBook}
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    bookData: state.listBooks.bookData.data
  }
}
// this.props.bookData

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    listBookStore: () => {
      dispatch({ type : GET_LIST_BOOKS })
    }
  }
}
// this.props.listBookStore()

export default connect(mapStateToProps, mapDispatchToProps)(ListBook);