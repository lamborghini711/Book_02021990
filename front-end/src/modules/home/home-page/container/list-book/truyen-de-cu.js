import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import ItemsCarousel from 'react-items-carousel';
import { Card, Badge, Icon } from 'antd';
import {connect} from 'react-redux';
const { Meta } = Card;

const noOfItems = 15;
var noOfCards = 8;
// const autoPlayDelay = 2000;
const chevronWidth = 40;
const Wrapper = styled.div`
  padding: 0px;
  max-width: 1400px;
  margin: 0 auto;
`;

class TruyenDeCu extends Component {
  state={
    activeItemIndex: 0,
  }
  componentDidMount() {
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
  tick = () => this.setState(prevState => ({
    activeItemIndex: (prevState.activeItemIndex + 1) % (noOfItems-noOfCards + 1),
  }));

  onChange = value => this.setState({ activeItemIndex: value });
  
  render() {
    var listDeCu = [];
    if (this.props.bookData) {
      var itemsDeCu = this.props.bookData.items
      var limit = itemsDeCu.length;
      for(let i=0 ; i<limit; i++) {
        listDeCu.push(
          <div className="col-md-2 col-card mg-all-0" key={i}>
            <Link to={"/truyen-" + to_slug(itemsDeCu[i].name) + "." + itemsDeCu[i].book_id}>
                <Badge count={itemsDeCu[i].last_chapter}>
                  <Card
                    cover={<img className="border-radius-10 thumb-cover" alt="example" src={itemsDeCu[i].cover} />}
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
        <h4 className="font-600 pd-top-20 pd-bottom-20 text-color-light">
          <i className="fa fa-thumbs-o-up" aria-hidden="true" style={{ paddingRight: '8px', fontSize: '22px' }}></i>Truyện đề cử
        </h4>
        <div className="row justify-content-md-center response-mg-all-0">
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
            children={listDeCu}
          />
        </Wrapper>
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
export default connect(mapStateToProps)(TruyenDeCu);