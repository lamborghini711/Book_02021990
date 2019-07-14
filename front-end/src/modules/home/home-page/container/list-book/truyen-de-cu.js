import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card, Badge, Icon } from 'antd';
import {GET_LIST_BOOKS_APPOINT} from '../../../../../redux/action/admin/book-actions';
import {connect} from 'react-redux';
const { Meta } = Card;

class TruyenDeCu extends Component {
  componentWillMount() {
    this.props.listBookStore() // su dung reducer trong store, // dispatch 'LIST_BOOKS'
  }
  render() {

    var listDeCu = [];
    if (this.props.bookData) {
      var itemsDeCu = this.props.bookData.items;
      var limit = itemsDeCu.length;
      for(let i=0 ; i<limit; i++) {
        listDeCu.push(
          <div className="col-md-2 col-card mg-all-0" key={i}>
            <Link to="/select">
                <Badge count={itemsDeCu[i].last_chapter}>
                  <Card
                    cover={<img className="border-radius-10 thumb-cover" alt="example" src={itemsDeCu[i].thumb} />}
                  >
                     <Meta title={itemsDeCu[i].name} />
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
              <span className="font-11 pd-left-5">{itemsDeCu[i].read}</span>
              </div>
            </div>
          </div>
        )
    }

    }

    
    const responsive = {
      desktop1080: {
        breakpoint: { max: 3000, min: 1600 },
        items: 8,
      },
      desktophd1: {
        breakpoint: { max: 1600, min: 1440 },
        items: 7,
      },
      desktophd7: {
        breakpoint: { max: 1440, min: 1200 },
        items: 6,
      },
     
      desktophd3: {
        breakpoint: { max: 1200, min: 1024 },
        items: 5,
      },
      tablet: {
        breakpoint: { max: 1024, min: 0 },
        items: 2,
      },
    };
    return (
      <div className="response">
        <h4 className="font-600 pd-top-10 pd-bottom-10 text-color-light">
        <Icon type="rise" style={{ paddingRight: '3px', fontSize: '22px', fontWeight: 'bold' }} /> Truyện đề cử
        </h4>
        <div className="row justify-content-md-center">
        <Carousel
          additionalTransfrom={0}
          arrows
          centerMode={false}
          containerClass=""
          deviceType={this.props.deviceType}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          sliderClass=""
          slidesToSlide={1}
          swipeable
          responsive={responsive}
        >
            {listDeCu}
        </Carousel>
        </div>
        <hr/>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    bookData: state.listBooks.bookAppointData.data
  }
}
// this.props.bookData

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    listBookStore: (book_appoint) => {
      dispatch({ type : GET_LIST_BOOKS_APPOINT, book_appoint:true })
    }
  }
}
// this.props.listBookStore()
export default connect(mapStateToProps, mapDispatchToProps)(TruyenDeCu);