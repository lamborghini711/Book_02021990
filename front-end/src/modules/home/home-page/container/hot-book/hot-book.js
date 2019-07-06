import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card, Badge, Icon } from 'antd';
const { Meta } = Card;

const listHot = [];
let limit = 10;
for(let i=0 ; i<=limit; i++) {
  listHot.push(
    <div className="col-md-2 col-card mg-all-0" key={i}>
      <Link to="/select">
          <Badge count={'99'}>
            <Card
              cover={<img className="border-radius-10 thumb-cover"  alt="example" src="/img/thumb/poster_01.jpg" />}
            >
              <Meta title="Chí Tôn Võ Đế" description="Europe Street beat" />
            </Card>
          </Badge>
      </Link>
    </div>
  )
}
class HotBook extends Component {
  render() {
    const responsive = {
      desktop2k: {
        breakpoint: { max: 3000, min: 1900 },
        items: 8,
      },
      desktop1080: {
        breakpoint: { max: 1900, min: 1600 },
        items: 7,
      },
      desktophd1: {
        breakpoint: { max: 1600, min: 1336 },
        items: 6,
      },
      desktophd2: {
        breakpoint: { max: 1336, min: 1200 },
        items: 5,
      },
      desktophd3: {
        breakpoint: { max: 1200, min: 1024 },
        items: 4,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
      },
    };
    return (
      <div>
        <h4 className="font-600 pd-top-20 text-color-light">
        <Icon type="rise" style={{ paddingRight: '3px', fontSize: '22px', fontWeight: 'bold' }} /> Đang Hot 
        </h4>
        <div className="row justify-content-md-center">
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
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
          responsive={responsive}
        >
            {listHot}
        </Carousel>
        </div>

      </div>
    );
  }
}

export default HotBook;