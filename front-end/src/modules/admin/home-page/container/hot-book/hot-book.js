import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card, Badge, Icon } from 'antd';
const { Meta } = Card;

class HotBook extends Component {
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 7,
        
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    return (
      <div>
        <h4 className="font-600 pd-top-20 text-color-light">
        <Icon type="rise" style={{ paddingRight: '3px', fontSize: '22px', fontWeight: 'bold' }} /> Đang Hot 
        </h4>
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
          // customTransition="all .5"
        >
          {/* <WithStyles
            description="React Carousel with Server Side Rendering Support – Part 1"
            headline="w3js.com - web front-end studio"
            image="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          /> */}
         
          <div>
            <Badge count={'99'}>
              <Card
                cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://image.xemphim.plus/w342/slGZ8miznmAZAaDHEz6BKo7f1N5.jpg" />}
              >
                <Meta title="Chí Tôn Võ Đế" description="Europe Street beat" />
              </Card>
            </Badge>
          </div>
          <div>
            <Badge count={'99'}>
              <Card
                cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/21908/poster_01_ise85870.jpg" />}
              >
                <Meta title="Chí Tôn Võ Đế" description="Europe Street beat" />
              </Card>
            </Badge>
          </div>
          <div>
            <Card
              cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/22084/poster_01_qgn20152.jpg" />}
            >
              <Meta title="Sát Nhân Bí Ẩn" description="Murder Mystery" />
            </Card>
          </div>
          <div>
            <Card
              cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/21908/poster_01_ise85870.jpg" />}
            >
              <Meta title="Bông hồng chết người" description="The Poison Rose" />
            </Card>
          </div>
          <div>
            <Card
              cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/22118/poster_01_ong18314.jpg" />}
            >
              <Meta title="Sau thế chiến" description="The Aftermath" />
            </Card>
          </div>
          <div>
            <Card
              cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/22141/poster_01_tim37584.jpg" />}
            >
              <Meta title="Dumbo: Chú voi biết bay" description="Dumbo" />
            </Card>
          </div>      
          <div>
            <Badge count={'99'}>
              <Card
                cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://image.xemphim.plus/w342/slGZ8miznmAZAaDHEz6BKo7f1N5.jpg" />}
              >
                <Meta title="Chí Tôn Võ Đế" description="Europe Street beat" />
              </Card>
            </Badge>
          </div>
          <div>
            <Badge count={'99'}>
              <Card
                cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/21908/poster_01_ise85870.jpg" />}
              >
                <Meta title="Chí Tôn Võ Đế" description="Europe Street beat" />
              </Card>
            </Badge>
          </div>
          <div>
            <Card
              cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/22084/poster_01_qgn20152.jpg" />}
            >
              <Meta title="Sát Nhân Bí Ẩn" description="Murder Mystery" />
            </Card>
          </div>      
          <div>
            <Card
              cover={<img className="border-radius-10 thumb-cover"  alt="example" src="https://img.khoai.tv/images/movies/22118/poster_01_ong18314.jpg" />}
            >
              <Meta title="Sau thế chiến" description="The Aftermath" />
            </Card>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default HotBook;