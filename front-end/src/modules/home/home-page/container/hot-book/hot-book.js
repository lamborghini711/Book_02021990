import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card, Badge, Icon } from 'antd';
import {GET_LIST_BOOKS_HOT} from '../../../../../redux/action/admin/book-actions';
import {connect} from 'react-redux';

const { Meta } = Card;

class HotBook extends Component {

  constructor(props) {
    super(props);
    this.state = {
      book_appoint : true
    }
  }

  componentWillMount() {
    this.props.hotBookStore() // su dung reducer trong store, // dispatch 'LIST_BOOKS'
  }
  
  render() {
    var listHot = [];
    if (this.props.bookData) {
      var itemsHot = this.props.bookData.items;
      var limit = itemsHot.length;
      for(let i=0 ; i<limit; i++) {
        listHot.push(
          <div className="col-md-2 col-card mg-all-0" key={i}>
            <Link to="/select">
                <Badge count={itemsHot[i].last_chapter}>
                  <Card
                    cover={<img className="border-radius-10 thumb-cover" alt="example" src={itemsHot[i].thumb} />}
                  >
                     <Meta title={itemsHot[i].name} />
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
              <span className="font-11 pd-left-5">{itemsHot[i].read}</span>
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
        <Icon type="rise" style={{ paddingRight: '3px', fontSize: '22px', fontWeight: 'bold' }} /> Đang Hot 
        </h4>
        <div className="row justify-content-md-center mg-bottom-10">
        <Carousel
          ssr={true} // means to render carousel on server-side.
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={1500}
          centerMode={false}
          containerClass=""
          autoPlay={this.props.deviceType !== "mobile" ? true : false}
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
            {listHot}
        </Carousel>
        </div>
        <hr className="mg-all-0"/>
      </div>
    );
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
export default connect(mapStateToProps, mapDispatchToProps)(HotBook);