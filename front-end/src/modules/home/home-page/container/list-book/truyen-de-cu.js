import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card, Badge, Icon } from 'antd';
const { Meta } = Card;

const listHot = [];
let limit = 10;
for(let i=1 ; i<=limit; i++) {
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
class TruyenDeCu extends Component {
  render() {
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
            {listHot}
        </Carousel>
        </div>
        <hr/>
      </div>
    );
  }
}

export default TruyenDeCu;