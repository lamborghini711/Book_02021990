import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import { Card, Badge, Icon } from 'antd';
const { Meta } = Card;
const listBook = [];
let limit = 50;

for(let i=0 ; i<=limit; i++) {
  listBook.push(
    <div className="col-md-2 col-card" key={i}>
      <Link to="/detail">
        <Badge count={'99'}>
          <Card
            cover={<img className="border-radius-10 thumb-cover"  alt="example" src="/img/thumb/poster_02.jpg" />}
          >
            <Meta title="Chí Tôn Võ Đế" description="Europe Street beat" />
          </Card>
        </Badge>
      </Link>
      
      <div className="row pd-top-10">
        <div className="col-md-2 text-color-primary">
          <Icon type="heart" theme="filled" />
        </div>
        <div className="col-md-2 text-color-grey">
          <Icon type="star" theme="filled" />
        </div>
        <div className="col-md-8 text-right text-color-grey">
          <Icon type="eye" theme="filled" />
        <span className="font-11 pd-left-5">1.9M</span>
        </div>
      </div>
    </div>
  )
}
class ListBook extends Component {
  render() {
    return (
      <div className="row justify-content-md-center">
        {listBook}
      </div>
    );
  }
}

export default ListBook;