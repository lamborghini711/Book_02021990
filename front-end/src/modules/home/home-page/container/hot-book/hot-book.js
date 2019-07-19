import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import 'react-multi-carousel/lib/styles.css';
import { Card, Badge, Icon } from 'antd';
import {connect} from 'react-redux';
import styled from 'styled-components';
import ItemsCarousel from 'react-items-carousel';
const { Meta } = Card;


const noOfItems = 15;
var noOfCards = 8;
const autoPlayDelay = 2000;
const chevronWidth = 40;

    // const responsive = {
    //   desktop1080: {
    //     breakpoint: { max: 3000, min: 1600 },
    //     items: 8,
    //   },
    //   desktophd1: {
    //     breakpoint: { max: 1600, min: 1440 },
    //     items: 7,
    //   },
    //   desktophd7: {
    //     breakpoint: { max: 1440, min: 1200 },
    //     items: 6,
    //   },
    //   desktophd3: {
    //     breakpoint: { max: 1200, min: 1024 },
    //     items: 5,
    //   },
    //   tablet: {
    //     breakpoint: { max: 1024, min: 0 },
    //     items: 2,
    //   },
    // };
const Wrapper = styled.div`
  padding: 0px;
  max-width: 1400px;
  margin: 0 auto;
`;

class HotBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book_appoint : true,
      activeItemIndex: 0,
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, autoPlayDelay);
    var w = window.innerWidth;
    if(1440 < w && w < 1600){
      noOfCards = 7;
    }
    if(1200 < w  && w < 1440){
      noOfCards = 6;
    }
    if(1024 < w && w < 1200){
      noOfCards = 5;
    }
    if(0 < w && w < 1024){
      noOfCards = 2;
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => this.setState(prevState => ({
    activeItemIndex: (prevState.activeItemIndex + 1) % (noOfItems-noOfCards + 1),
  }));

  onChange = value => this.setState({ activeItemIndex: value });
  
  render() {
    var listHot = [];
    if (this.props.bookData) {
      var itemsHot = this.props.bookData.items;
      var limit = itemsHot.length;
      for(let i=0 ; i<limit; i++) {
        listHot.push(
          <div className="col-md-2 col-card mg-all-0" key={i}>
            <Link to={"/truyen-" + to_slug(itemsHot[i].name) + "." + itemsHot[i].book_id}>
                <Badge count={itemsHot[i].last_chapter}>
                  <Card
                    cover={<img className="border-radius-10 thumb-cover" alt="example" src={itemsHot[i].cover} />}
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
    


    function to_slug(str){
      str = str.toLowerCase();     
      str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
      str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
      str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
      str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
      str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
      str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
      str = str.replace(/(đ)/g, 'd');
      str = str.replace(/([^0-9a-z-\s])/g, '');
      str = str.replace(/(\s+)/g, '-');
      str = str.replace(/^-+/g, '');
      str = str.replace(/-+$/g, '');
      return str;
    }

    return (
      <div className="response">
        <h4 className="font-600 pd-top-10 pd-bottom-10 text-color-light">
        <Icon type="rise" style={{ paddingRight: '3px', fontSize: '22px', fontWeight: 'bold' }} /> Đang Hot 
        </h4>
        <div className="row justify-content-md-center mg-bottom-10 response-mg-all-0">
        <Wrapper>
          <ItemsCarousel
            gutter={12}
            numberOfCards={noOfCards}
            activeItemIndex={this.state.activeItemIndex}
            requestToChangeActive={this.onChange}
            rightChevron={<button className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"><i className="fa fa-chevron-right" aria-hidden="true"></i></button>}
            leftChevron={<button className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left"><i className="fa fa-chevron-left" aria-hidden="true"></i></button>}
            chevronWidth={chevronWidth}
            outsideChevron
            children={listHot}
          />
        </Wrapper>
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
export default connect(mapStateToProps)(HotBook);